const jwt = require('jsonwebtoken');
const local_config = require('../../configs/config');

exports.tokenAuthorized = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(req.headers.authorization);
    if (authHeader) {
        console.log('jwt');
        const token = authHeader.split(' ')[1];
        console.log(token);

        jwt.verify(token, local_config.auth_secret, (err, user) => {
            if (err) {
                console.log('Invalid Token' + err);
                return res.status(401).send({status:local_config.statusCode.unauthorized, message: 'Invalid Token'});
            }

            //req.user = user;
            console.log('Valid Token generated successfully!');
            next();
        });
    } else {
        console.log({status: local_config.statusCode.notFound, message: 'Token is missing'});
        res.status(401).send({status: local_config.statusCode.notFound, message: 'Token is missing'});
    }
};

/*
module.exports = {
    tokenAuthorized: function (req, res, next) {
       
        if (allowed.indexOf(req.path) !== -1) {
            return next();
        }
        
        var bearerToken;
        var bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== 'undefined') {
            var bearer = bearerHeader.split(" ");
            bearerToken = bearer[1];
            req.token = bearerToken;
            if (local_config.auth_secret) {
                jwt.verify(bearerToken, local_config.auth_secret, function (err, decoded) {
                    req.user = decoded;
                    if (req.user) {
                        req.user.timezone_id = (req.user.hasOwnProperty('timezone_id') && req.user.timezone_id) ? req.user.timezone_id : 'Africa/Lagos';
                    }
                    if (err) {
                        res.json({
                            status: local_config.statusCode.unauthorized,
                            // data: {},
                            message: 'Invalid Token'
                        });
                    } else {
                        next();
                    }
                });
            } else {
                res.json({
                    status: local_config.statusCode.serviceUnavailable,
                    //error: err,
                    message: "Service is temporarily unavailable"
                });
            }

        } else {
            res.json({
                status: local_config.statusCode.unauthorized,
                message: 'Token is missing!'
            });
        }
    }
}
*/