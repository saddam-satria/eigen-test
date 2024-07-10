"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageProperties_1 = require("../common/MessageProperties");
class AbstractService {
    getMessage(key, lang) {
        return (0, MessageProperties_1.default)(key, lang);
    }
}
exports.default = AbstractService;
//# sourceMappingURL=AbstractService.js.map