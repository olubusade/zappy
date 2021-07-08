const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const Otp = require('../models/otp')(sequelize, Sequelize);
const User = require('../models/user')(sequelize, Sequelize);
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const { reject, result } = require('lodash');

Otp.sync();

exports.otpModel = {
    saveOTP: async(otpData) => {
        console.log('OTP in model:',otpData);
        return await new Promise((resolve, reject) => {
            User.count({ where: { mobile_no: otpData.mobile_no } })
            .then(count => {
              if (count != 0 || count > 0) {
                resolve(count);
              }else{
                Otp.create(otpData)
                .then(otp => {
                    resolve(otp.dataValues);
                },err=>{
                    reject({error:err});
                });
              }
             
            });
            
        });
    },
    emailOTP: async(otpData) => {
        console.log('Email OTP in model:',otpData);
        return await new Promise((resolve, reject) => {
            User.count({ where: { email: otpData.email } })
            .then(count => {
              if (count != 0 || count > 0) {
                resolve(count);
              }else{
                Otp.update(
                    {email:otpData.email, otp: otpData.otp},
                    {where: {mobile_no: otpData.mobile_no}}
                ).then(email_otp => {
                   resolve({update:email_otp[0]});
                }, err => {
                    reject({error: err});
                })
              }
             
            });
            
        });
    },
    verifyMobileOtp: async(otpData) => {
        console.log('VERIFY MOBILE OTP in model:',otpData);
        return await new Promise((resolve, reject) => {
        let {mobile} = otpData;
        console.log('converted:', mobile);
        sequelize.query(
            `SELECT * FROM otps 
             WHERE mobile_no = ${mobile}
             AND created::date = now()::date ORDER BY id DESC LIMIT 1`
        )
        .then(otp => {
                resolve(otp[0][0]);
                console.log('check me:',otp[0][0]); 
            },err=>{
                reject({error:err});
            });
           
      });
    },
    verifyEmailOTP: async(otpData) => {
        console.log('VERIFY EMAIL OTP in model:',otpData);
        return await new Promise((resolve, reject) => {
        let {email} = otpData;
        console.log('converted:', email);
        sequelize.query(
            `SELECT * FROM otps 
             WHERE email = '${email}'
             AND created::date = now()::date ORDER BY id DESC LIMIT 1`
        )
        .then(otp => {
                resolve(otp[0][0]);
                //console.log(otp[0][0]); 
            },err=>{
                reject({error:err});
            });
           
      });
    },
    savePasswordResetOTP: async (otpData) => {
        console.log('OTP in model:',otpData);
        return await new Promise((resolve, reject) => {
            User.count({ where: { email: otpData.email } })
            .then(count => {
              if (count != 0 || count > 0) {
                sequelize.query(`update users set password_reset_otp = ${otpData.otp} where email = '${otpData.email}'`)
                .then(user => {
                    resolve(count);
                 }).catch(function(e) {
                    console.log("Password reset otp failed !");
                })
                .then(otp => {
                    resolve(count);
                    console.log(`Password reset OTP saved successfully for ${otpData.email}`)
                },err=>{
                    reject({error:err});
                });
              }
             
            }); 
        });
    },
    verifyPasswordResetOtp: async(otpData) => {
        console.log('VERIFY PASSWORD RESET OTP in model:',otpData);
        return await new Promise((resolve, reject) => {
        let {email} = otpData;
        
        sequelize.query(
            `SELECT * FROM users 
            WHERE email = '${email}'
            ORDER BY id DESC LIMIT 1`
        )
        .then(otp => {
                resolve(otp[0][0]);
                //console.log(otp[0][0]); 
            },err=>{
                reject({error:err});
            });
           
      });
    }
    
}
