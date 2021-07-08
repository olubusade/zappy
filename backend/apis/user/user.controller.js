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
      console.log(req.body);
      UserModel.userModel.registerUser(req.body.userData).then((result) => {
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

            result.expiresIn = local_config.expiresIn;
            result.access_token = accessToken;
            res.send({status:local_config.statusCode.created, message: 'Congratulations, your account has been successfully created.', data:result});
            console.log({status:local_config.statusCode.created, message: 'Congratulations, your account has been successfully created.', data:result});
          }
       
      }, err => {
        console.log(err);
      });  
    },
    login : (req, res) => {
      let {mobile_no, password} = req.body.userData;
      UserModel.userModel.login(req.body.userData).then(async (result) => {
       // console.log('RESULT:',result);

          if (result) {
            // if the user exists, let's compare their hashed password to a new hash from req.body.password
            const hashedPassword = await bcrypt.compare(
              password,
              result.password
            );
            // bcrypt.compare returns a boolean to us, if it is false the passwords did not match!
            if ( hashedPassword === false ) {
                res.send({status: local_config.statusCode.notAcceptable, message: 'Oops! Invalid Password!'});
                console.log({status: local_config.statusCode.notAcceptable, message: 'Oops! Invalid Password!'});
            }
            if ( hashedPassword === true ) {
              const  accessToken  =  jwt.sign(
                {user_id: result.id }, 
                local_config.auth_secret,
                {expiresIn: local_config.expiresIn}
              ); 

              result.expiresIn = local_config.expiresIn;
              result.access_token = accessToken;
              res.send({status:local_config.statusCode.found, message: 'Login successful.', data:result});
              console.log({status:local_config.statusCode.found, message: 'Login successful.', data:result});
            }
          
          }else{
            res.send({status:local_config.statusCode.notFound, message: 'Oops! Invalid Mobile No.'});
            console.log({status:local_config.statusCode.notFound, message: 'Oops! Invalid Mobile No.'});
          }
       
      }, err => {
        console.log(err);
      });  
    },
    loginUserWithBiometric : (req, res) => {
      let {mobile_no, password} = req.body.userData;
      delete req.body.user_id;
      delete req.body.password;
      console.log(req.body.userData);
      
      UserModel.userModel.login(req.body.userData).then(async (result) => {
       // console.log('RESULT:',result);

          if (result) {
              const  accessToken  =  jwt.sign(
                {user_id: result.id }, 
                local_config.auth_secret,
                {expiresIn: local_config.expiresIn}
              ); 

              result.expiresIn = local_config.expiresIn;
              result.access_token = accessToken;
              res.send({status:local_config.statusCode.found, message: 'Login successful.', data:result});
              console.log({status:local_config.statusCode.found, message: 'Login successful.', data:result});
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
          console.log(req.body.userData);
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
          if(result[0] == 1){
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
    } 
}
