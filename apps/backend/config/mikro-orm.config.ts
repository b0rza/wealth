import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';

const { env } = process;

export default defineConfig({
  // entities: [],
  dbName: 'wealth',
  host: env.HUB_DB_HOSTNAME || 'localhost',
  user: 'borza',
  password: env.HUB_DB_PASSWORD || '',
  port: parseInt(env.HUB_DB_PORT) || 5432,
  entities: ['src/**/*.entity.{ts,js}'],
  discovery: {
    warnWhenNoEntities: false,
  },
  extensions: [Migrator],
  migrations: {
    snapshot: false,
    fileName: (timestamp) => `${timestamp}-migration`,
  },
});
