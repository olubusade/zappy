'use strict';
const local_config = require('../../configs/config');
const UserModel = require('./user.model');
const fs = require('fs');
const { result } = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { json } = require('express');

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
        }else {
          
          
          let user = {
            "id": result.user.id,
            "role_id": result.user.role_id,
            "first_name": result.user.first_name,
            "last_name": result.user.last_name,
            "mobile_no": result.user.mobile_no
          }

          // const  expiresIn  =  24  *  60  *  60;
          const  accessToken  =  jwt.sign(
            {user_id: result.user.id }, 
            local_config.auth_secret,
            {expiresIn: local_config.expiresIn}
          ); 

          let auxValueConverter = [];
          await result.auxData.aux_value.map((obj) => {
            obj.replace(/\r?\n|\r/g, "");
            auxValueConverter.push(JSON.parse(obj));
          });
          result.auxData.aux_value = auxValueConverter;

          result.user.expiresIn = local_config.expiresIn;
          result.user.access_token = accessToken;

          res.send({status:local_config.statusCode.created, message: 'Congratulations, your account has been successfully created.', data: result.user, auxData: JSON.stringify(result.auxData)});
          console.log({status:local_config.statusCode.created, message: 'Congratulations, your account has been successfully created.', data:result});
        }
      
    }, err => {
      console.log(err);
    });  
  },

  login : (req, res) => {
    let {mobile_no, password} = req.body.userData;
    UserModel.userModel.login(req.body.userData).then(async (result) => {
      console.log('RESULT:',result);

        if (result) {
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
            console.log({status:local_config.statusCode.found, message: 'Login successful.', data:result});

            await result.auxData.aux_value.map((obj) => {
              obj.replace(/\r?\n|\r/g, "");
              auxValueConverter.push(JSON.parse(obj));
            });

            console.log({auxValueConverter});
            
            result.auxData.aux_value = auxValueConverter;

            console.log(result);
            res.send({status:local_config.statusCode.found, message: 'Login successful.', data: result.user, auxData: JSON.stringify(result.auxData)});

            //console.log({auxValueConverter: JSON.parse(auxValueConverter)});

            // auxValueConverter.map((auxValue) => {
            //   console.log(JSON.parse(auxValue));
            // });

          }
        
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
  }
}