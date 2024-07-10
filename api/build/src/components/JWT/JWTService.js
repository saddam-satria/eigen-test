"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const constant_1 = require("../../config/constant");
const JWTException_1 = require("./JWTException");
class JWTService {
    constructor() {
        this.SECRET_KEY = constant_1.SECRET_KEY;
    }
    verify(token) {
        try {
            return (0, jsonwebtoken_1.verify)(token, constant_1.SECRET_KEY);
        }
        catch (error) {
            throw new JWTException_1.default(error);
        }
    }
    generateAccessToken(payload) {
        try {
            return (0, jsonwebtoken_1.sign)(payload, this.SECRET_KEY, { expiresIn: '15m' });
        }
        catch (error) {
            throw new JWTException_1.default(error);
        }
    }
    generateRefreshToken(payload) {
        try {
            return (0, jsonwebtoken_1.sign)(payload, this.SECRET_KEY, { expiresIn: '15d' });
        }
        catch (error) {
            throw new JWTException_1.default(error);
        }
    }
    decodeToken(token) {
        try {
            this.verify(token);
            return (0, jsonwebtoken_1.decode)(token);
        }
        catch (error) {
            throw new JWTException_1.default(error);
        }
    }
}
exports.default = JWTService;
//# sourceMappingURL=JWTService.js.map