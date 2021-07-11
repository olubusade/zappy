const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const User = require('../models/user')(sequelize, Sequelize);
const WalletTnxRef = require('../models/wallet-tnx-ref')(sequelize, Sequelize);
const Referrals = require('../models/referrals')(sequelize, Sequelize);
const AuxData = require('../models/aux-data')(sequelize, Sequelize);
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const { reject, result } = require('lodash');

const bcrypt = require('bcrypt');
const user = require('../models/user');
const saltRounds = 10;

User.sync();
WalletTnxRef.sync();
Referrals.sync();
AuxData.sync();

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
                                //resolve(user.dataValues);
                                AuxData.findAll().then(auxData => {
                                    let resp = {user: user.dataValues, auxData: auxData[0].dataValues};
                                    resolve(resp);  
                                }, err => {
                                    reject({error: err});
                                })
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
                if(user === null){
                    let resp = null;
                    resolve(resp);
                }else{
                    console.log({modelUser: user});
                    AuxData.findAll().then(auxData => {
                        console.log('AUX DATA:',auxData);
                        let resp = {user: user.dataValues, auxData: auxData[0].dataValues};
                        resolve(resp);  
                    }, err => {
                        reject({error: err});
                    })
                }   
            }, err => {
                reject({error: err});
            })
        });
    },    
    updateUserPassword: (userData) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                where: { id: userData.user_id},
                limit: 1,
            }).then(async user  => {
                if(user === null){
                    resolve(user);
                }else{
                    // if the user exists, let's compare their hashed password to a new hash from req.body.password
                    const hashedPassword = await bcrypt.compare(
                        userData.old_password,
                        user.password
                    );
                    // bcrypt.compare returns a boolean to us, if it is false the passwords did not match!
                    if ( hashedPassword === false ) {
                        resolve(404);
                    }
                    if ( hashedPassword === true ) {
                        bcrypt.genSalt(saltRounds, (err, salt) => {
                            bcrypt.hash(userData.new_password, salt, (err, hash) => {
                                userData['new_password'] = hash;
                                console.log('Model2:', userData);
                                User.update(
                                    {password:userData.new_password},
                                    {where: {id: userData.user_id}}
                                ).then(user => {
                                   resolve(user[0]);
                                }, err => {
                                    reject({error: err});
                                })
                            },err=>{
                                    reject({error:err});
                                }
                            );
                        });                      
                    }                                    
                }   
            }, err => {
                reject({error: err});
            })
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
    upgradeUserLevel: (userData) => {
        console.log(userData);
        return new Promise((resolve, reject) => {
            if (userData.user_id) {
                User.update(
                    {
                        wallet_amount:userData.wallet_bal,
                        role_id:userData.new_role_id
                    },
                    {where: {id: userData.user_id}}
                ).then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
        });
    },
    verifyTnxPin: (data) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                where: {
                    id: data.userId,
                    transaction_pin: data.enteredPin
                }
            }).then(resp => {
                resolve(resp);
            }, err => {
                reject(err);
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
    updateWalletAfterRecharge: (data) => {
        return new Promise(async (resolve, reject) => {
            await sequelize.query(
                'UPDATE users SET wallet_amount = wallet_amount - $1, cashback = cashback + $2 WHERE id = $3',
                { 
                    bind: [data.amount, data.reward, data.userId], 
                    type: QueryTypes.UPDATE 
                }
            ).then(user => {
                //console.log(user);
                resolve(user);
            }, err => {
                reject({error: err});
            })
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
