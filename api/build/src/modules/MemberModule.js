"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MemberModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const BaseResponse_1 = require("../components/BaseResponse");
const MemberController_1 = require("../controllers/MemberController");
const BookRepository_1 = require("../repositories/BookRepository");
const MemberRepository_1 = require("../repositories/MemberRepository");
const MemberService_1 = require("../services/MemberService");
let MemberModule = MemberModule_1 = class MemberModule {
};
MemberModule = MemberModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [MemberController_1.default],
        providers: [MemberService_1.default, MemberRepository_1.default, BaseResponse_1.default, BookRepository_1.default],
        exports: [MemberModule_1],
    })
], MemberModule);
exports.default = MemberModule;
//# sourceMappingURL=MemberModule.js.map