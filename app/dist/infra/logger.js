"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const pino_1 = __importDefault(require("pino"));
const log = (0, pino_1.default)({
    level: 'debug',
    transport: {
        targets: [
            {
                target: 'pino-pretty',
                level: 'error',
                options: {
                    name: 'dev-terminal',
                    colorize: true,
                    levelFirst: true,
                    include: 'level,time',
                    translateTime: 'yyyy-mm-dd HH:MM:ss Z',
                },
            },
        ],
    },
});
exports.log = log;
//# sourceMappingURL=logger.js.map