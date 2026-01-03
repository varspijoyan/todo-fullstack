import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Todos } from './todos/todos.entity';
import { Users } from './users/users.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Users, Todos],
  migrations: ['src/migration/**/*.ts'],
});
