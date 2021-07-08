const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const User = require('../models/user')(sequelize, Sequelize);
const WalletTnxRef = require('../models/wallet-tnx-ref')(sequelize, Sequelize);
const Referrals = require('../models/referrals')(sequelize, Sequelize);
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const { reject, result } = require('lodash');

const bcrypt = require('bcrypt');
const user = require('../models/user');
const saltRounds = 10;

User.sync();
WalletTnxRef.sync();
Referrals.sync();

exports.userModel = {
    registerUser: async(userData) => {
        let password = userData.password;
        let valid_referrer = false;
        let referrer_id;
        let referral_id;
        return await new Promise((resolve, reject) => {
            let referrer_code = userData.referrer_code;

            if (referrer_code !=='') {
                User.count({ where: {
                            referral_code: referrer_code
                        }
                })
                .then(count => {
                    console.log("checking count:",count);
                    if (count <= 0 ) {
                      resolve({referral_code:count});
                    }else{
                        valid_referrer = true;
                        _registerUser();
                    }
                })
            }else{
                _registerUser();
            }
            
            function _registerUser(){
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        userData['password'] = hash;
                        console.log('Model2:', userData);
                        User.count({ where: {
                            [Op.or]: [
                                { email: userData.email},
                                { mobile_no: userData.mobile_no}
                            ]}
                        })
                        //    mobile_no: userData.mobile_no } })
                        .then(count => {
                          if (count != 0 || count > 0) {
                            resolve(count);
                          }else{
                                                       
                            User.create(userData)
                            //sequelize.query(
                              //  `INSERT INTO users (first_name, last_name,email, password, mobile_no, role_id) VALUES 
                              //  (${userData.first_name},${userData.last_name},${userData.email},${userData.password},${userData.mobile_no},${userData.role_id})`)
                              .then(user => {
                                resolve(user.dataValues);
                              //Insert in to referrals table
                            console.log('Valid Referrer', valid_referrer);
                            if (valid_referrer == true) {
                               /*
                                sequelize.query(`SELECT id FROM users WHERE referral_code = '${userData.referrer_code}'`)
                               .then(referrer => {
                                    referrer_id = referrer[0][0].id
                                }, err => {
                                    reject({error:err});
                                    console.log('Something went wrong while selecting the referrer');
                                })

                                sequelize.query(`SELECT id FROM users WHERE referral_code = '${userData.referral_code}'`)
                                .then(referral => {
                                    referral_id = referral[0][0].id;
                                }, err => {
                                    reject({error:err});
                                    console.log('Something went wrong while selecting the referral');
                                })
                                */
                                let referrer_amount = 0;

                                let referralData = {
                                 // referrer:referrer_id,
                                    referrer_code:userData.referrer_code,
                                  //referral: referral_id,
                                    referral_code: userData.referral_code,
                                    referrer_amount:referrer_amount
                                };
                                Referrals.create(referralData)
                                .then(referral => {

                                }, err=> {
                                    reject({error:err});
                                    console.log('Something went wrong while inserting the referral data');
                                })
                            }

                            console.log(user.dataValues);
                            },err=>{
                                reject({error:err});
                            });
                            
                          }
                         
                        });
                    });
                }); 
            }
        });

       
    },
    login: (userData) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                where: {
                   // [Op.or]: [
                    //    { id: userData.user_id },
                      mobile_no: userData.mobile_no 
                 //     ]
                },
                limit: 1,
            }).then(user => {
                let resp = user == null ? user : user.dataValues;
                resolve(resp);
            }, err => {
                reject({error: err});
            })
        });
    },
    getUsers: () => {
        return new Promise((resolve, reject) => {
            User.findAll().then(user => {
                console.log(user)
               // let resp = user == null ? user : user.dataValues;
                resolve(user);
            }, err => {
                reject({error: err});
            })
        });
    },
    finishWalletPayment: (walletAmount, reference, userId) => {
        return new Promise((resolve, reject) => {
            User.update({wallet_amount: walletAmount}, {
                where: {
                    id: userId
                }
            }).then(user => {
                //console.log(user);
                resolve(user);
            }, err => {
                reject({error: err});
            })
        });
    },
    saveTnxRef: (reference, userId, amount) => {
        return new Promise((resolve, reject) => {
            WalletTnxRef.create({user_id: userId, amount: amount, ref: reference}).then(tnxRef => {
                resolve(tnxRef);
            },err=>{
                reject({error:err});
            });
        });
    },
    saveOTP: (userData) => {
        return new Promise((resolve, reject) => {
            let password = userData.password;
        
            User.create(userData).then(user => {
                resolve(user);
            },err=>{
                reject({error:err});
            });
        
           

        });
    },
    updateUserProfile: (userData) => {
        return new Promise((resolve, reject) => {
            if (userData.nickname) {
                User.update(
                    {nickname:userData.nickname},
                    {where: {id: userData.user_id}}
                ).then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.address) {
                User.update(
                    {address:userData.address},
                    {where: {id: userData.user_id}}
                ).then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.security_question) {
                User.update(
                    {security_question:userData.security_question},
                    {where: {id: userData.user_id}}
                ).then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.sq_answer) {
                User.update(
                    {security_answer:userData.sq_answer},
                    {where: {id: userData.user_id}}
                ).then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            
        });
    },
    resetUserPassword: async(userData) => {
        return await new Promise((resolve, reject) => {
            let password = userData.password;
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    userData['password'] = hash;
                    User.update({password: userData.password}, {
                        where: {
                            email: userData.email
                        }
                    })
                    .then(user => {  
                        resolve(user);
                    }).catch(function(e) {
                        console.log("Password reset failed:", e);
                    });    
                });
            }); 
        });
    }
}
