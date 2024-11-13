import { DataSource } from 'typeorm';
import { getEnv } from '../utils/envs';

export class DatabaseConfig {
  private static dataSource: DataSource;

  public static async initialize(): Promise<DataSource> {
    if (!DatabaseConfig.dataSource) {
      DatabaseConfig.dataSource = new DataSource({
        type: 'mysql',
        host: getEnv('DB_HOST', 'localhost'),
        port: Number(getEnv('DB_PORT', '3306')),
        username: getEnv('DB_USER', 'admin'),
        password: getEnv('DB_PASSWORD', 'password'),
        database: getEnv('DB_NAME', 'test_db'),
        synchronize: true,
        logging: false,
      });

      await DatabaseConfig.dataSource.initialize();
    }

    return DatabaseConfig.dataSource;
  }

  public static getDataSource(): DataSource {
    if (!DatabaseConfig.dataSource) {
      throw new Error('Conexão com o Banco de Dados precisa ter sido estabelecida.');
    }

    return DatabaseConfig.dataSource;
  }
}
