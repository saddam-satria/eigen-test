"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let PasswordEncoderService = class PasswordEncoderService {
    async generate(password) {
        const salt = await (0, bcrypt_1.genSalt)(10);
        return await (0, bcrypt_1.hash)(password, salt);
    }
    async matches(passwordPlain, passwordHash) {
        return await (0, bcrypt_1.compare)(passwordPlain, passwordHash);
    }
};
PasswordEncoderService = __decorate([
    (0, common_1.Injectable)()
], PasswordEncoderService);
exports.default = PasswordEncoderService;
//# sourceMappingURL=PasswordEncoderService.js.map