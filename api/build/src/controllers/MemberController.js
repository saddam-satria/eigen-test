"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const BaseResponse_1 = require("../components/BaseResponse");
const MemberService_1 = require("../services/MemberService");
let MemberController = class MemberController {
    constructor(memberService, responseService) {
        this.memberService = memberService;
        this.responseService = responseService;
    }
    getMember(code) {
        return this.memberService.getMember(code);
    }
    getMemberBooks(code) {
        return this.memberService.getMemberBooks(code);
    }
    getMembers() {
        return this.memberService.getMembers();
    }
};
__decorate([
    (0, common_1.Get)('members/:code'),
    (0, swagger_1.ApiParam)({
        required: true,
        name: 'code',
        example: 'M001',
    }),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "getMember", null);
__decorate([
    (0, common_1.Get)('members/:code/books'),
    (0, swagger_1.ApiParam)({
        required: true,
        name: 'code',
        example: 'M001',
    }),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "getMemberBooks", null);
__decorate([
    (0, common_1.Get)('members'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'get all members with total borrowed book ',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "getMembers", null);
MemberController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('Member Service'),
    __metadata("design:paramtypes", [MemberService_1.default,
        BaseResponse_1.default])
], MemberController);
exports.default = MemberController;
//# sourceMappingURL=MemberController.js.map