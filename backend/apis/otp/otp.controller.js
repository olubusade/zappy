'use strict';
const local_config = require('../../configs/config');
const { result } = require('lodash');
const jwt = require('jsonwebtoken');
const OtpModel = require('./otp.model');
const sms = require('../../libs/sms/sms');
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
    }
  
}
