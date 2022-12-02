/* eslint-disable prettier/prettier */
export default {
  name: 'development',
  type: 'mysql',
  host: 'localhost',
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER_PROD,
  password: process.env.DATABASE_PASSWORD_PROD,
  database: process.env.DATABASE_NAME_PROD_PROD,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities',
  },
  logging: false,
};
