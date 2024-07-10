"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorException extends Error {
    constructor(message) {
        super(message);
        this.name = 'Base Error';
    }
}
exports.default = ErrorException;
//# sourceMappingURL=ErrorException.js.map