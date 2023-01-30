"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const morgan = require("morgan");
const calculate_time_request_interceptor_1 = require("./interceptors/calculate-time-request/calculate-time-request.interceptor");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(morgan('dev'));
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        forbidNonWhitelisted: true,
        transform: true,
        whitelist: true,
    }));
    app.useGlobalInterceptors(new calculate_time_request_interceptor_1.CalculateExecutionTimeOfRequestInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('mosala API')
        .setDescription('Open API de mosala APP')
        .setVersion('1.0')
        .addTag('default')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const configService = app.get(config_1.ConfigService);
    console.log(`http://localhost:${configService.get('APP_PORT')}`);
    await app.listen(configService.get('APP_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map