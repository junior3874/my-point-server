import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable("service_provider", (table) => {
    table.increments("id");
    table
      .integer("company_id")
      .references("id")
      .inTable("company")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("name");
    table.integer("rg");
    table.integer("cpf");
    table.string("password");
    table.integer("function_id").references("id").inTable("provider_function");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("service_provider");
}
