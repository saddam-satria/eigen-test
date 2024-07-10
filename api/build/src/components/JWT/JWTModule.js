"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JwtModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const JWTService_1 = require("./JWTService");
let JwtModule = JwtModule_1 = class JwtModule {
};
JwtModule = JwtModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [JWTService_1.default],
        exports: [JwtModule_1],
    })
], JwtModule);
exports.default = JwtModule;
//# sourceMappingURL=JWTModule.js.map