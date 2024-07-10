"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const AppController_1 = require("../controllers/AppController");
const AppService_1 = require("../services/AppService");
const serve_static_1 = require("@nestjs/serve-static");
const constant_1 = require("../config/constant");
const MemberModule_1 = require("./MemberModule");
const BookModule_1 = require("./BookModule");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply().forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [AppController_1.default],
        providers: [AppService_1.default],
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: constant_1.STATIC_ASSETS,
                serveRoot: '/assets',
                serveStaticOptions: {
                    cacheControl: true,
                },
            }),
            MemberModule_1.default,
            BookModule_1.default,
        ],
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=AppModule.js.map