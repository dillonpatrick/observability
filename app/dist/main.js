"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tracer_1 = __importDefault(require("./tracer"));
tracer_1.default.start();
const logger_1 = require("./infra/logger");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app
        .listen(3001)
        .then(() => {
        logger_1.log.info('Aplicação subiu!');
    })
        .catch(() => {
        logger_1.log.error('Aplicação não subiu!');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map