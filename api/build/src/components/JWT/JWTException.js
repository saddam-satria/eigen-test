"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const ErrorException_1 = require("../../common/ErrorException");
class JWTException {
    constructor(error) {
        if (error instanceof jsonwebtoken_1.TokenExpiredError) {
            throw new ErrorException_1.default('Token Expired');
        }
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            throw new ErrorException_1.default('Token Invalid');
        }
    }
}
exports.default = JWTException;
//# sourceMappingURL=JWTException.js.map