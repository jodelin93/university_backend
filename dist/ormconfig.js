"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.datasourceOptions = {
    type: 'mysql',
    host: 'mocha3034.mochahost.com',
    port: 3306,
    username: 'jodelind_app',
    password: 'Universitejerusalem@2020',
    database: 'jodelind_app',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migration/**/*{.ts,.js}'],
};
const dateSource = new typeorm_1.DataSource(exports.datasourceOptions);
exports.default = dateSource;
//# sourceMappingURL=ormconfig.js.map