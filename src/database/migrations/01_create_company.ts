import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable("company", (table) => {
    table.increments("id");
    table.string("name");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("company");
}
