"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = __importDefault(require("@config/auth"));
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
function ensureAuthenticated(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('Token not found', 401);
    }
    var _a = authHeader.split(' '), token = _a[1];
    var secret = auth_1.default.jwt.secret;
    try {
        var decoded = jsonwebtoken_1.verify(token, secret);
        var sub = decoded.sub;
        request.user = {
            id: sub,
        };
        return next();
    }
    catch (err) {
        throw new AppError_1.default('Invalid Token', 401);
    }
}
exports.default = ensureAuthenticated;
