import { defineConfig } from '@mikro-orm/postgresql';
import { database } from './index';

console.log('env.DB_PORT', database.port);

export default defineConfig({
  ...database,
  dynamicImportProvider: id => import(id),
  entities: ['server/**/*.entity.{ts,js}'],
  migrations: {
    path: 'server/migrations',
    snapshot: false
  }
})
