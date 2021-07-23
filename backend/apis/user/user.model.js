const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const User = require('../models/user')(sequelize, Sequelize);
const WalletTnxRef = require('../models/wallet-tnx-ref')(sequelize, Sequelize);
const Referrals = require('../models/referrals')(sequelize, Sequelize);
const AuxData = require('../models/aux-data')(sequelize, Sequelize);
const TransactionHistory = require('../models/trans-hist')(sequelize, Sequelize);
const BeneficiaryGroup = require('../models/ben-group')(sequelize, Sequelize);
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
TransactionHistory.sync();
BeneficiaryGroup.sync();

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
        console.log(userData);
        
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
            if (userData.dob) {
                User.update(
                    {dob:userData.dob},
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
            //Profile->Setting Update starts here
            if (userData.notification_alert) {
                User.update(
                    {notification_alert:userData.notification_alert},
                    {where: {id: userData.user_id}}
                )
                .then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.alert_preference) {
                User.update(
                    {alert_preference:userData.alert_preference},
                    {where: {id: userData.user_id}}
                )
                .then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.low_wallet_amount) {
                User.update(
                    {low_wallet_trigger_amount:userData.low_wallet_amount},
                    {where: {id: userData.user_id}}
                )
                .then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.automated_report) {
                User.update(
                    {automated_report:userData.automated_report},
                    {where: {id: userData.user_id}}
                )
                .then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.commission_regime) {
                User.update(
                    {commission_regime:userData.commission_regime},
                    {where: {id: userData.user_id}}
                )
                .then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            if (userData.transaction_pin) {
                User.update(
                    {transaction_pin:userData.transaction_pin},
                    {where: {id: userData.user_id}}
                )
                .then(user => {
                   resolve(user[0]);
                }, err => {
                    reject({error: err});
                })
            }
            //Profile->Setting Update ends here
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
    },
    getTransactionHistory: (data) => {
        return new Promise((resolve, reject) => {
            TransactionHistory.findAll({
                where: {
                    user_id: data.userId,
                    year: data.year
                }
            }).then(resp => {
                resolve(resp);
            }, err => {
                reject(err);
            })
        });
    },
    refreshWallet: (userData) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                where: {
                    id: userData.userId
                },
                limit: 1,
            }).then(user => {
                resolve(user)   
            }, err => {
                reject({error: err});
            })
        });
    },
    shareFund: (data) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                where: {
                    mobile_no: data.phone
                },
                limit: 1,
            }).then(async (user) => {
                console.log(user);
                if(user==null){
                    resolve({data: user, message: "Recipient not found"})
                }else{
                    await sequelize.query(
                        'UPDATE users SET wallet_amount = wallet_amount - $1 WHERE id = $2',
                        { 
                            bind: [data.amount, data.userId], 
                            type: QueryTypes.UPDATE 
                        }
                    ).then(async user => {
                        console.log(user);

                        await sequelize.query(
                            'UPDATE users SET wallet_amount = wallet_amount + $1 WHERE mobile_no = $2',
                            { 
                                bind: [data.amount, data.phone], 
                                type: QueryTypes.UPDATE 
                            }
                        ).then(user => {
                            console.log(user);
                            let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            let d = new Date();
                            let currentMonth = monthNames[d.getMonth()];
                            let currentYear = d.getFullYear();
                            TransactionHistory.findOne({
                                where: {
                                    user_id: data.userId,
                                    month: currentMonth,
                                    year: currentYear
                                },
                                //limit: 1,
                            }).then(async (tnx) => {
                                if(tnx == null){
                                    let transactions = [];
                                    console.log("I will insert");
                                    let date = new Date();
                                    let day = date.getDate().length == 1 ? '0'+date.getDate() : date.getDate();
                                    let initMonth = date.getMonth() + 1;
                                    let month = initMonth.length == 1 ? '0'+initMonth : initMonth;
                                    let year = date.getFullYear();
                                    let hours = date.getHours();
                                    var minutes = date.getMinutes();
                                    var ampm = hours >= 12 ? 'pm' : 'am';
                                    hours = hours % 12;
                                    hours = hours ? hours : 12; // the hour '0' should be '12'
                                    minutes = minutes < 10 ? '0'+minutes : minutes;
                                    let strTime = hours + ':' + minutes + ' ' + ampm;
                                    let rand = Math.floor(Math.random() * 1000000000);
                                    let ref = 'sf-'+data.userId+rand;

                                    let newTransaction = {
                                        "title": "Debit",
                                        "desc": "Share Fund with "+data.phone,
                                        "amount": data.amount,
                                        "date": day + "-" + month + "-" + year + " " + strTime,
                                        "ref": ref
                                    }
                                    console.log(JSON.stringify(newTransaction));
                                    let stringifiedTnx = JSON.stringify(newTransaction);
                                    transactions.push(stringifiedTnx);

                                    TransactionHistory.create({user_id: data.userId, month: currentMonth, year: currentYear, transactions: transactions}).then(tnx => {
                                        resolve({data: tnx, message: 'Fund sharing successfull'});
                                    },err=>{
                                        reject({error:err});
                                    });

                                }else{
                                    //console.log("I will update");
                                    console.log(tnx.dataValues);
                                    let transactions = tnx.dataValues.transactions;
                                    console.log(transactions);

                                    let date = new Date();
                                    let day = date.getDate().length == 1 ? '0'+date.getDate() : date.getDate();
                                    let initMonth = date.getMonth() + 1;
                                    let month = initMonth.length == 1 ? '0'+initMonth : initMonth;
                                    let year = date.getFullYear();
                                    let hours = date.getHours();
                                    var minutes = date.getMinutes();
                                    var ampm = hours >= 12 ? 'pm' : 'am';
                                    hours = hours % 12;
                                    hours = hours ? hours : 12; // the hour '0' should be '12'
                                    minutes = minutes < 10 ? '0'+minutes : minutes;
                                    let strTime = hours + ':' + minutes + ' ' + ampm;
                                    let rand = Math.floor(Math.random() * 1000000000);
                                    let ref = 'sf-'+data.userId+rand;

                                    let newTransaction = {
                                        "title": "Debit",
                                        "desc": "Share Fund with "+data.phone,
                                        "amount": data.amount,
                                        "date": day + "-" + month + "-" + year + " " + strTime,
                                        "ref": ref
                                    }
                                    console.log(JSON.stringify(newTransaction));
                                    let stringifiedTnx = JSON.stringify(newTransaction);
                                    transactions.push(stringifiedTnx);
                                    console.log(transactions);

                                    TransactionHistory.update({transactions: transactions}, {
                                        where: {
                                            user_id: data.userId,
                                            month: currentMonth,
                                            year: currentYear
                                        }
                                    }).then(tnx => {
                                        //console.log(user);
                                        resolve({data: tnx, message: 'Fund sharing successfull'});
                                    }, err => {
                                        reject({error: err});
                                    })
                                }
                            }, err => {
                                reject({error: err});
                            })
                        }, err => {
                            reject({error: err});
                        })
                        //resolve(user);
                    }, err => {
                        reject({error: err});
                    }) 
                }
                //resolve(user)   
            }, err => {
                reject({error: err});
            })
        });
    },

    createBeneficiaryGroup: (data) => {
        return new Promise((resolve, reject) => {
            BeneficiaryGroup.findOne({
                where: {
                    user_id: data.userId,
                    group_name: data.groupName
                },
                //limit: 1,
            }).then(group => {
                if(group){
                    resolve({data: null, message: 'existing'});
                }else{
                    BeneficiaryGroup.create({user_id: data.userId, group_name: data.groupName}).then(group => {
                        resolve({data: group, message: "success"});
                    },err=>{
                        reject({error:err});
                    });
                }    
            }, err => {
                reject({error: err});
            })
        });
    },

    fetchBeneficiaryGroups: (data) => {
        return new Promise((resolve, reject) => {
            BeneficiaryGroup.findAll({
                where: {
                    user_id: data.userId,
                },
                //limit: 1,
            }).then(group => {
                resolve(group);    
            }, err => {
                reject({error: err});
            })
        });
    },

    addContact: (data) => {
        return new Promise((resolve, reject) => {
            console.log(data);
            BeneficiaryGroup.findOne({
                where: {
                    id: data.groupId
                },
                //limit: 1,
            }).then(async (group) => {
                console.log(group.dataValues);
                let newArray = group.dataValues.group == null ? [] : group.dataValues.group;
                let ingoingObj = {"name": data.name, "phone": data.phone};
                let stringifiedObj = JSON.stringify(ingoingObj);
                newArray.push(stringifiedObj);

                BeneficiaryGroup.update({group: newArray}, {
                    where: {
                        id: data.groupId,
                    }
                }).then(group => {
                    //console.log(user);
                    resolve({data: group, message: 'Contact added successfull'});
                }, err => {
                    reject({error: err});
                })

            }, err => {
                reject({error:err});
            });
        });
    },
}
