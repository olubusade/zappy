
var formaterrors = require("formaterrors");

/**
 * An Exception. This does not extend or replace the Javascript Error type. Rather its purpose is to make throwing
 * and catching non-standard Javascript Errors simpler and less prone to .... errors.
 *
 * @class Exception
 * @constructor new Exception(name)
 * @param name the name of the Exception - which is also the name of errors thrown by this Exception.
 */
exports.Exception = function (name) {
    this.name = name;
    this.throw = function (message) {
        throwError(name, message);
    };
};

/**
 * An IllegalArgumentException instance of Exception.
 */
exports.ILLEGAL_ARGUMENT = new exports.Exception("IllegalArgumentException");

/**
 * An IllegalStateException instance of Exception.
 */
exports.ILLEGAL_STATE = new exports.Exception("IllegalStateException");

/**
 * An IOException instance of Exception.
 */
exports.IO = new exports.Exception("IOException");
/**
 * An HeaderSentException instance of Exception.
 */
exports.RESPONSE_HEADERS = new exports.Exception("HeaderSentException");
/**
 * An DatabaseModelException instance of Exception.
 */
exports.DB_MODEL = new exports.Exception("DatabaseModelException");

/**
 * Throw an error. This method ensures that no exceptions.js lines are included in the stack trace of the thrown
 * error.
 * 
 * @private
 * @param {String} name the name of the Error to throw.
 * @param {String} message the message part of the error to throw.
 */
function throwError(name, message) {
    var error = new Error(message);
    error.name = name;

    error.stack = formaterrors.stackFilter(error.stack, ["exceptions.js"], false);

    throw error;
}