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
    verifyOTP: async(otpData) => {
        console.log('VERIFY OTP in model:',otpData);
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
                //console.log(otp[0][0]); 
            },err=>{
                reject({error:err});
            });
           
      });
    }
    
}
