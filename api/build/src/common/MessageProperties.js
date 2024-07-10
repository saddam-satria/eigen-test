"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../utils/messages");
const MessagesResponse = (key, lang) => {
    switch (key) {
        case messages_1.SUCCESS_MESSAGE.key:
            return messages_1.SUCCESS_MESSAGE.message[lang];
        default:
            return 'success';
    }
};
exports.default = MessagesResponse;
//# sourceMappingURL=MessageProperties.js.map