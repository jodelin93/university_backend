"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_exception_1 = require("./exceptions/typeorm.exception");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('/v1/api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
    }));
    app.useGlobalFilters(new typeorm_exception_1.TypeOrmFilter());
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map