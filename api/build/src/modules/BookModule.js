"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BookModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const BaseResponse_1 = require("../components/BaseResponse");
const BookController_1 = require("../controllers/BookController");
const BookRepository_1 = require("../repositories/BookRepository");
const BookService_1 = require("../services/BookService");
let BookModule = BookModule_1 = class BookModule {
};
BookModule = BookModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [BookController_1.default],
        providers: [BookService_1.default, BookRepository_1.default, BaseResponse_1.default],
        exports: [BookModule_1],
    })
], BookModule);
exports.default = BookModule;
//# sourceMappingURL=BookModule.js.map