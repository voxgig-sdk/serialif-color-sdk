"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialifColorError = void 0;
class SerialifColorError extends Error {
    isSerialifColorError = true;
    sdk = 'SerialifColor';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SerialifColorError = SerialifColorError;
//# sourceMappingURL=SerialifColorError.js.map