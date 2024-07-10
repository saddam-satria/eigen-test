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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const AbstractService_1 = require("../components/AbstractService");
const BaseResponse_1 = require("../components/BaseResponse");
const BookRepository_1 = require("../repositories/BookRepository");
const MemberRepository_1 = require("../repositories/MemberRepository");
let MemberService = class MemberService extends AbstractService_1.default {
    constructor(memberRepository, responseService, bookRepository) {
        super();
        this.memberRepository = memberRepository;
        this.responseService = responseService;
        this.bookRepository = bookRepository;
    }
    async getMember(memberCode) {
        const member = await this.memberRepository.findMemberByMemberCode(memberCode);
        if (member.length < 1)
            throw new common_1.HttpException(this.responseService.send(common_1.HttpStatus.NOT_FOUND, this.getMessage('NOT_FOUND', 'en'), common_1.HttpStatus.NOT_FOUND), common_1.HttpStatus.NOT_FOUND);
        return this.responseService.send(common_1.HttpStatus.OK, this.getMessage('SUCCESS', 'en'), member[0]);
    }
    async getMembers() {
        const members = await this.memberRepository.findMembers();
        return this.responseService.send(common_1.HttpStatus.OK, this.getMessage('SUCCESS', 'en'), members);
    }
    async getMemberBooks(memberCode) {
        const member = await this.memberRepository.findMemberByMemberCode(memberCode);
        if (member.length < 1)
            throw new common_1.HttpException(this.responseService.send(common_1.HttpStatus.NOT_FOUND, this.getMessage('NOT_FOUND', 'en'), common_1.HttpStatus.NOT_FOUND), common_1.HttpStatus.NOT_FOUND);
        const memberBooks = await this.bookRepository.findBorrowedBookByMemberId(member[0].id);
        return this.responseService.send(common_1.HttpStatus.OK, this.getMessage('SUCCESS', 'en'), {
            ...member[0],
            books: memberBooks.map(({ Book: { author, code, stock, createdAt, title, updatedAt, id }, }) => ({ author, code, stock, createdAt, title, updatedAt, id })),
        });
    }
};
MemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [MemberRepository_1.default,
        BaseResponse_1.default,
        BookRepository_1.default])
], MemberService);
exports.default = MemberService;
//# sourceMappingURL=MemberService.js.map