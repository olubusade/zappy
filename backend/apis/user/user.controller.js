'use strict';
const local_config = require('../../configs/config');
const UserModel = require('./user.model');
const fs = require('fs');
const { result } = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { sendEmail } = require('../../libs/smtp/email');
const { getMaxListeners } = require('process');

exports.userController = {
    registerNewUser: (req, res) => {
      delete req.body.userData.confirmpassword;
      req.body.userData["wallet_amount"] = 0;
      req.body.userData["cashback"] = 0;
      console.log(req.body);
      UserModel.userModel.registerUser(req.body.userData).then(async (result) => {
        //console.log('RESULT:',result);
        
          if (result > 0) {
              res.send({status:local_config.statusCode.conflict,message:"Oops! You're an existing user!"});
              console.log({status:local_config.statusCode.conflict,message:"Oops! You're an existing user!"});
          }else if (result.referral_code <= 0) {
            res.send({status:local_config.statusCode.notFound,message:"Oops! Incorrect referrer code!"});
          }else {
            let user = {
              "id": result.id,
              "role_id": result.role_id,
              "first_name": result.first_name,
              "last_name": result.last_name,
              "mobile_no": result.mobile_no
            }

            // const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign(
              {user_id: result.id }, 
              local_config.auth_secret,
              {expiresIn: local_config.expiresIn}
            ); 
            let auxValueConverter = [];
            await result.auxData.aux_value.map((obj) => {
              obj.replace(/\r?\n|\r/g, "");
              auxValueConverter.push(JSON.parse(obj));
            });

            result.auxData.aux_value = auxValueConverter;

            result.expiresIn = local_config.expiresIn;
            result.access_token = accessToken;
            res.send({status:local_config.statusCode.created, message: 'Congratulations, your account has been successfully created.', data: result.user, auxData: JSON.stringify(result.auxData)});
            console.log({status:local_config.statusCode.created, message: 'Congratulations, your account has been successfully created.', data: result.user, auxData: JSON.stringify(result.auxData)});
          }
       
      }, err => {
        console.log(err);
      });  
    },
    login : (req, res) => {
      let {mobile_no, password} = req.body.userData;
      UserModel.userModel.login(req.body.userData).then(async (result) => {
      
          if (result) {
            console.log(password);
            console.log(result.user);
            // if the user exists, let's compare their hashed password to a new hash from req.body.password
            const hashedPassword = await bcrypt.compare(
              password,
              result.user.password
            );
            // bcrypt.compare returns a boolean to us, if it is false the passwords did not match!
            if ( hashedPassword === false ) {
                res.send({status: local_config.statusCode.notAcceptable, message: 'Oops! Invalid Password!'});
                console.log({status: local_config.statusCode.notAcceptable, message: 'Oops! Invalid Password!'});
            }
            if ( hashedPassword === true ) {
              let auxValueConverter = [];
              const  accessToken  =  jwt.sign(
                {user_id: result.id }, 
                local_config.auth_secret,
                {expiresIn: local_config.expiresIn}
              ); 

              result.user.expiresIn = local_config.expiresIn;
              result.user.access_token = accessToken;
              await result.auxData.aux_value.map((obj) => {
                obj.replace(/\r?\n|\r/g, "");
                auxValueConverter.push(JSON.parse(obj));
              });
              
              result.auxData.aux_value = auxValueConverter;
  
              console.log(result);
              res.send({status:local_config.statusCode.found, message: 'Login successful.', data: result.user, auxData: JSON.stringify(result.auxData)});
            }
          
          }else{
            res.send({status:local_config.statusCode.notFound, message: 'Oops! Invalid Mobile No.'});
            console.log({status:local_config.statusCode.notFound, message: 'Oops! Invalid Mobile No.'});
          }
       
      }, err => {
        console.log(err);
      });  
    },
    updateUserPassword : (req, res) => {
      delete req.body.userData.confirm_new_password;
      console.log(req.body.userData);
     
      UserModel.userModel.updateUserPassword(req.body.userData).then(async (result) => {
          if (result) {
            if(result == local_config.statusCode.notFound){
               res.send({status:local_config.statusCode.notFound, message: 'Oops! Invalid Old Password!'});
               console.log({status:local_config.statusCode.notFound, message: 'Oops! Invalid Old Password!'});
            }else if(result >= 1) {
              res.send({status:local_config.statusCode.accepted, message: 'Password changed successfully!'});
              console.log({status:local_config.statusCode.accepted, message: 'Password changed successfully!'});
            }
          }
      }, err => {
        res.send({status:local_config.statusCode.internalServerError, message: 'Something went wrong!'});
        console.log({status:local_config.statusCode.internalServerError, message: 'Something went wrong!!',error:err});
      });  
    },
    loginUserWithBiometric : (req, res) => {
      let {mobile_no, password} = req.body.userData;
      delete req.body.user_id;
      delete req.body.password;
      console.log(req.body.userData);
      
      UserModel.userModel.login(req.body.userData).then(async (result) => {
      
          if (result) {
              let auxValueConverter = [];
              const  accessToken  =  jwt.sign(
                {user_id: result.id }, 
                local_config.auth_secret,
                {expiresIn: local_config.expiresIn}
              ); 

              result.user.expiresIn = local_config.expiresIn;
              result.user.access_token = accessToken;
              await result.auxData.aux_value.map((obj) => {
                obj.replace(/\r?\n|\r/g, "");
                auxValueConverter.push(JSON.parse(obj));
              });
              result.auxData.aux_value = auxValueConverter;
              res.send({status:local_config.statusCode.found, message: 'Login successful.', data: result.user, auxData: JSON.stringify(result.auxData)});
              console.log({status:local_config.statusCode.found, message: 'Login successful.', data: result.user, auxData: JSON.stringify(result.auxData)});
          }else{
            res.send({status:local_config.statusCode.notFound, message: 'Oops! Invalid Mobile No.'});
            console.log({status:local_config.statusCode.notFound, message: 'Oops! Invalid Mobile No.'});
          }
      }, err => {
        console.log(err);
      }); 
      
    },
    getUsers: (req, res) => {
      
      UserModel.userModel.getUsers().then(async (result) => {
        console.log('RESULT:',result);
        res.send({status:local_config.statusCode.ok, message:'Fetching List of Zappy Users', data:result})
       
      }, err => {
        console.log(err);
      });
    },
    updateUserProfile : (req, res) => {
      let {user_id, nickname, address, security_question, sq_answer} = req.body.userData;
         
          UserModel.userModel.updateUserProfile(req.body.userData).then(async (result) => {       
            if (result == 1){
               res.send({status:local_config.statusCode.ok, message: 'update successful.'});
               console.log({status:local_config.statusCode.ok, message: 'update successful.'});       
            }
          })
      , err => {
        console.log(err);
      };  
    },
    upgradeUserLevel : (req, res) => {
          console.log(req.body);
          UserModel.userModel.upgradeUserLevel(req.body).then(async (result) => {       
            if (result == 1){
               res.send({status:local_config.statusCode.ok, message: 'Upgrade successful.'});
               console.log({status:local_config.statusCode.ok, message: 'Upgrade successful.'});       
            }else{
              res.send({status:local_config.statusCode.conflict, message: 'Oops! Something went wrong!'});
               console.log({status:local_config.statusCode.conflict, message: 'Oops! Something went wrong!'});       
            }
          })
      , err => {
        console.log(err);
      };  
    },
    resetUserPassword : (req, res) => {
      delete req.body.userData.confirmpassword;
      console.log(req.body.userData);
      UserModel.userModel.resetUserPassword(req.body.userData).then(async (result) => {
        if (result > 0) {
          res.send({status:local_config.statusCode.accepted, message: `Password reset successfully for ${req.body.userData.email}`, data:result});
          console.log({status:local_config.statusCode.accepted, message: `Password reset successfully for ${req.body.userData.email}`, data:result});  
          
        }else {
          res.send({status:local_config.statusCode.conflict,message:`Oops! Password reset failed!`});  
      }
       
      }, err => {
            console.log(err);
      });  
      
    },
    finishWalletPayment: (req, res) => {
      console.log(req.body);

      UserModel.userModel.saveTnxRef(req.body.paymentRef, req.body.userId, req.body.paymentAmount).then((result) => {
        console.log(result);
        UserModel.userModel.finishWalletPayment(req.body.walletAmount, req.body.paymentRef, req.body.userId).then(async (result) => {
          console.log(result);
          if(result){
            res.send({status:local_config.statusCode.created}); 
          }else{
            res.send({status:local_config.statusCode.notAcceptable});
          }
        }, err => {
          console.log(err);
          res.send({status:local_config.statusCode.notAcceptable});
        });
      }, err => {
        console.log(err);
      });
    },
    verifyTnxPin: (req, res) => {
      console.log(req.body);
      UserModel.userModel.verifyTnxPin(req.body).then(async (result) => {
        console.log(result);
        if(result == null){
          res.send({status: local_config.statusCode.notFound});
        }else{
          res.send({status: local_config.statusCode.found});
        }
      });
    },
    recharge: (req, res) => {
      console.log(req.body);
      const customerReference = Math.floor(100000 + Math.random() * 900000);

      const https = require('https')

      const data = JSON.stringify({
        amount: req.body.amount,
        beneficiary: req.body.mobile,
        customer_reference: customerReference,
        tariffTypeId: ""
      })

      const options = {
        hostname: 'api.topupbox.com',
        port: 443,
        path: '/services/api/v2/w1/recharge/'+req.body.network+'/'+req.body.type,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
          'authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE2MjQ3MTU4MDMsImlzcyI6IlpFRURMQUJTIiwicm9sZU5hbWUiOiJtZXJjaGFudCIsImRlYWxlciI6ImJvZGxpbmsiLCJleHAiOjE2NTYyNTE4MDMsImlhdCI6MTYyNDcxNTgwMywidXNlcklkIjoiYWRlb3llYWRla295YSJ9.Sd1YxXNiuKwPzIGf6GvQM_HGo8nFmoUUqee0-2wlSNU',
          'Accept': '*/*'
        }
      }

      const subReq = https.request(options, subRes => {
        var response = '';
        console.log(`statusCode: ${subRes.statusCode}`)
        //console.log(subRes.data);
        subRes.on('data', d => {
          //process.stdout.write(d)
          response += d;
        })

        subRes.on('end', function () {
          console.log("Sub res end");
          console.log(response);
          if(JSON.parse(response).response == null){
            console.log("Sub response is null");
            res.send({status:subRes.statusCode, response: JSON.parse(response)});
            return;
          }
          UserModel.userModel.updateWalletAfterRecharge(req.body).then(async (result) => {
            console.log(result);
            res.send({status:subRes.statusCode, response: JSON.parse(response)});
          });
          //res.send({status:subRes.statusCode, response: JSON.parse(response)});
        });
       
      })
    
      subReq.on('error', error => {
        console.log("Error is available");
        console.error(error)
      })
      
      subReq.write(data)
      subReq.end()
  },

  getTransactionHistory: (req, res) => {
    console.log(req.body);
    let resultReceiver = [];
    UserModel.userModel.getTransactionHistory(req.body).then(async (result) => {
      console.log(result);
      if(result){
        result.map(history => {
          let newTransactions = [];
          history.transactions.map((transaction) => {
            newTransactions.push(JSON.parse(transaction));
          });
          history.transactions = newTransactions;
          resultReceiver.push(history.dataValues);
        });

        console.log(resultReceiver);
        res.send({status: local_config.statusCode.found, data: resultReceiver});
      }else{
        res.send({status: local_config.statusCode.notFound});
      }
    });
  },

  refreshWallet: (req, res) => {
    console.log(req.body);
    UserModel.userModel.refreshWallet(req.body).then(async (result) => {
      console.log(result);
      if(result){
        res.send({status: local_config.statusCode.found, data: result});
      }else{
        res.send({status: local_config.statusCode.notFound});
      }
    });
  },

  shareFund: (req, res) => {
    console.log(req.body);
    UserModel.userModel.shareFund(req.body).then(async (result) => {
      console.log(result);
      if(result){
        res.send({status: local_config.statusCode.found, data: result});
      }else{
        res.send({status: local_config.statusCode.notFound});
      }
    });
  },

  createBeneficiaryGroup: (req, res) => {
    console.log(req.body);
    UserModel.userModel.createBeneficiaryGroup(req.body).then(async (result) => {
      console.log(result);
      if(result.message == 'success'){
        res.send({status: local_config.statusCode.found, message: "successful"});
      }else if(result.message == 'existing'){
        res.send({status: local_config.statusCode.notFound, message: "existing"});
      }else{
        res.send({status: local_config.statusCode.notFound, message: "failure"});
      }
    });
  },

  fetchBeneficiaryGroups: (req, res) => {
    console.log(req.body);
    let resultReceiver = [];
    UserModel.userModel.fetchBeneficiaryGroups(req.body).then(async (result) => {
      console.log(result);
      result.map(group => {
        let newGroups = [];
        if(group.group != null){
          group.group.map((g) => {
            newGroups.push(JSON.parse(g));
          });
        }
        group.group = newGroups;
        resultReceiver.push(group.dataValues);
      });
      res.send({status: local_config.statusCode.found, data: resultReceiver});
    });
  },

  addContact: (req, res) => {
    console.log(req.body);
    UserModel.userModel.addContact(req.body).then(async (result) => {
      console.log(result);
      res.send(result);
    });
  },
}
