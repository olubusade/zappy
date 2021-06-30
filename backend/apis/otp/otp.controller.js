'use strict';
const local_config = require('../../configs/config');
const { result } = require('lodash');
const jwt = require('jsonwebtoken');
const OtpModel = require('./otp.model');
const sms = require('../../libs/sms/sms');
const { sendEmail } = require('../../libs/smtp/email');
exports.otpController = {
    
  validateMobileNo: (req, res) => {

        console.log(req.body);
        OtpModel.otpModel.saveOTP(req.body).then((result) => {
          
          if (result > 0) {
            res.send({status:local_config.statusCode.conflict,message:"Oops! You're an existing user!"});
            console.log({status:local_config.statusCode.conflict,message:"Oops! You're an existing user!"});
          }else {
            var user = {
              "name": "My Name",
              "id": "1234"
            }
            
            const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  user.id }, local_config.auth_secret, {
                                      expiresIn: expiresIn
                                    });
            res.send({status:local_config.statusCode.created, message: 'Token generated successfully',"user_mobile_no":  req.body.mobile_no, "access_token":  accessToken, "expires_in":  expiresIn});
            console.log({status:local_config.statusCode.created, message: 'Token generated successfully',"user_mobile_no":  req.body.mobile_no, "access_token":  accessToken, "expires_in":  expiresIn});
            //console.log('TESTING OTP:',result.toJSON())
            
            let msg = `Your Zappy Registration OTP is:${req.body.otp}`;
           // sms.sendSMS(req.body.mobile_no,msg);
          }         
        }, err => {
          console.log(err);
      });  

    },
    verifyOtp: (req, res) => {
        OtpModel.otpModel.verifyOTP(req.body).then((result) => {
        console.log('OTP RESPONSE:',result);
        
        if (result.otp == req.body.otp) {
              res.status(202).send({status: local_config.statusCode.accepted, message:'Mobile No. verified successfully'});
              console.log({status: local_config.statusCode.accepted, message:'Mobile No. verified successfully'});
        }else{
              res.send({status: local_config.statusCode.forbidden, message:'Invalid OTP'});
              console.log({status: local_config.statusCode.forbidden, message:'Invalid OTP'});
        }
          
        }, err => {
              res.send({status:local_config.statusCode.notAcceptable, message:'Mobile No. verification failed'});
              console.log(err);
        });  
    },
    sendPasswordResetOtp: (req, res) => {
      console.log('Controller:',req.body);
      let otp = req.body.otp;
      OtpModel.otpModel.savePasswordResetOTP(req.body).then((result) => {  
        if (result > 0) {
          let msg = `Use this OTP to reset your password:${otp}`;
          sendEmail(req.body.email,'Password Reset','', msg);
          res.send({status:local_config.statusCode.ok, message: 'Please check the inbox or spam of the email provided to continue!', data:result});
          console.log({status:local_config.statusCode.ok, message: 'Please check the inbox or spam of the email provided to continue!', data:result});
        }else{
            res.send({status:local_config.statusCode.notFound, message: `Oops! You're not an existing user!`, data:result});
            console.log({status:local_config.statusCode.notFound, message: `You're not an existing user!`, data:result});
          // sms.sendSMS(req.body.mobile_no,msg);
        }
      });  
    },
    verifyPasswordResetOtp: (req, res) => {
      OtpModel.otpModel.verifyPasswordResetOtp(req.body).then((result) => {
      console.log('OTP RESPONSE:',result);
      
      if (result.password_reset_otp == req.body.otp) {
            res.status(202).send({status: local_config.statusCode.accepted, message:'Email verified successfully'});
            console.log({status: local_config.statusCode.accepted, message:'Email verified successfully'});
      }else{
            res.send({status: local_config.statusCode.forbidden, message:'Invalid OTP'});
            console.log({status: local_config.statusCode.forbidden, message:'Invalid OTP'});
      }
        
      }, err => {
            res.send({status:local_config.statusCode.notAcceptable, message:'Email verification failed'});
            console.log(err);
      });  
  }
  
}
