import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable("service_support", (table) => {
    table.increments("id");
    table
      .integer("company_id")
      .references("id")
      .inTable("company")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("service_support");
}
