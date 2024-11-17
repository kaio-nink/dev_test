import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Post } from './entity/Post';

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "127.0.0.1",
  port: 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "test_db",
  entities: [User, Post],
  synchronize: true,
});

export default AppDataSource;