"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dotenv_1 = require("dotenv");
const constant_1 = require("./config/constant");
const AppModule_1 = require("./modules/AppModule");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("./config/swagger");
(async () => {
    (0, dotenv_1.config)({
        path: '.env',
    });
    const app = await core_1.NestFactory.create(AppModule_1.default, { cors: true });
    app.enableCors({
        origin: constant_1.AllowedIP,
    });
    const swaggerDocs = swagger_1.SwaggerModule.createDocument(app, swagger_2.default);
    swagger_1.SwaggerModule.setup('/api/docs', app, swaggerDocs, {
        jsonDocumentUrl: 'api/docs/json',
        yamlDocumentUrl: 'api/docs/yaml',
    });
    await app.listen(constant_1.PORT);
})();
//# sourceMappingURL=main.js.map