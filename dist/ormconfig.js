"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'jodelin',
    database: 'university_backend',
    entities: ['dist/src/**/*.js'],
    migrations: ['dist/src/migrations/**/*.js'],
});
AppDataSource.initialize()
    .then(() => {
})
    .catch((error) => console.log(error));
exports.default = AppDataSource;
//# sourceMappingURL=ormconfig.js.map