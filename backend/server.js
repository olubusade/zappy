'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const env = require('./configs/env');
const user = require('./apis/user/user.route');
const otp = require('./apis/otp/otp.route');
//const role = require('./apis/user/role.route');
const jwt = require('jsonwebtoken');

const app = express();
const  router  =  express.Router();
app.use(cors())
const SECRET_KEY = "secretkey23456";

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
}); 

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
user.userRoutes(router);
otp.otpRoutes(router);

router.get('/', (req, res) => {
    res.json(`Starting the Authenticated Http instance of Zappy Bill Payment & Airtime Recharge App Server at: http://${env.db_host}:${env.port}`);
})
app.use(router);
const PORT = process.env.port || env.port;
app.listen(PORT, function () {
    console.log(`Starting the Http instance of Zappy Billing App Server at: http://${env.db_host}:${env.port}`);
});
