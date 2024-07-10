"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATIC_ASSETS = exports.SECRET_KEY = exports.AllowedIP = exports.BASE_URL = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
const path = require("path");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 5000;
exports.BASE_URL = process.env.BASE_URL || `http://localhost:${exports.PORT}`;
exports.AllowedIP = ['http://localhost:3000'];
exports.SECRET_KEY = process.env.SECRET_KEY;
exports.STATIC_ASSETS = path.join(__dirname, '..', '..', 'public');
//# sourceMappingURL=constant.js.map