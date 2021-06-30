const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const User = require('../models/user')(sequelize, Sequelize);
const WalletTnxRef = require('../models/wallet-tnx-ref')(sequelize, Sequelize);
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const { reject, result } = require('lodash');

const bcrypt = require('bcrypt');
const user = require('../models/user');
const saltRounds = 10;

User.sync();
WalletTnxRef.sync();

exports.userModel = {
    registerUser: async(userData) => {
        return await new Promise((resolve, reject) => {
            console.log('Model:', userData);
            let password = userData.password;

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
                        /*sequelize.query(
                            `INSERT INTO users (first_name, last_name,email, password, mobile_no, role_id) VALUES 
                            (${userData.first_name},${userData.last_name},${userData.email},${userData.password},${userData.mobile_no},${userData.role_id})`)
                         */ .then(user => {
                            resolve(user.dataValues);
                        },err=>{
                            reject({error:err});
                        });
                      }
                     
                    });
                });
            }); 
            
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
