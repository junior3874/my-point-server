import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable("provider_function", (table) => {
    table.increments("id");
    table
      .integer("service_provider_id")
      .references("id")
      .inTable("service_provider")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("function_id")
      .references("id")
      .inTable("function")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("provider_function");
}
