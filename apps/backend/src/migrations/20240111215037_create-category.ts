import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'category';

export class CreateCategory extends Migration {
  async up(): Promise<void> {
    return this.ctx.schema.createTable(TABLE_NAME, function (table) {
      table.increments('id').primary();
      table.integer('parentId');
      table.foreign('parentId').references('category.id');
      table.string('name', 255).notNullable();
      table.timestamps(true, true); // created_at, updated_at
      table.timestamp('deleted_at', { useTz: true });
    });
  }

  async down(): Promise<void> {
    return this.ctx.schema.dropTableIfExists(TABLE_NAME);
  }
}
