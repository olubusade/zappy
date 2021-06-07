'use strict';
const local_config = require('../../configs/config');
const fs = require('fs');
const { result } = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const SECRET_KEY = "secretkey23456";


exports.userController = {
    registerUser: (req, res) => {
      delete req.body.confirm_password;
      console.log(req.body);
      UserModel.userModel.registerUser(req.body).then((result) => {
        //console.log(result);
        var user = {
          "name": "My Name",
          "id": "1234"
      }
        
       // const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  user.id }, local_config.auth_secret, {
                expiresIn: local_config.expiresIn
        });
        res.status(201).send({"user":  user, "access_token":  accessToken, "expires_in":  expiresIn, status: 'success'});
      }, err => {
        res.status(406).send({id: 0, status: 'failure'});
      });  
    },

    processLogin: (req, res) => {
      let user = req.params.user;

      if(user){
        UserModel.userModel.processLogin(req.params.email).then((result) => {
          //console.log(result);
          if(result == null){
            res.status(200).send({message: 'failure'});
          }else{
            let password = result.password;

            bcrypt.compare(req.params.password, password).then(function(resp) {
              if(resp){
              //  const  expiresIn  =  24  *  60  *  60;
                const  accessToken  =  jwt.sign({ id:  user.id }, local_config.auth_secret, {
                    expiresIn: local_config.expiresIn
                });
                res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn,  userData: result});
              }else{
                res.status(200).send({message: 'failure'});
              }
            });
          }
        }, err => {
          res.status(406).send(err);
        });
      }
    },

    otpMobileNo: (req, res) => {

      console.log(req.body);
/*
      if (a){
          res.status(200).send({status:local_config.statusCode.ok, message: 'OTP sent successfully!'});
      }else {
        res.status(503).send({status:local_config.statusCode.serviceUnavailable, message: 'OTP Service is not available!'});
      }
      */
    }
  
}
