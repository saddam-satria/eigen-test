"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constant_1 = require("../config/constant");
const common_2 = require("@nestjs/common");
const AbstractService_1 = require("../components/AbstractService");
const BaseResponse_1 = require("../components/BaseResponse");
let FootPrintMiddleware = class FootPrintMiddleware extends AbstractService_1.default {
    constructor() {
        super(...arguments);
        this.allowedIP = constant_1.AllowedIP;
    }
    use(req, res, next) {
        const reqIP = req.ip;
        if (this.allowedIP.length === 0) {
            return next();
        }
        if (this.allowedIP.includes(reqIP)) {
            return next();
        }
        return res
            .status(common_2.HttpStatus.BAD_REQUEST)
            .json(BaseResponse_1.default.send(common_2.HttpStatus.FORBIDDEN, this.getMessage('NOT_ALLOWED', 'en'), null));
    }
};
FootPrintMiddleware = __decorate([
    (0, common_1.Injectable)()
], FootPrintMiddleware);
exports.default = FootPrintMiddleware;
//# sourceMappingURL=FootPrintMiddleware.js.map