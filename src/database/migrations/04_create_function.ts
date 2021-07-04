import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable("function", (table) => {
    table.increments("id");
    table
      .integer("company_id")
      .references("id")
      .inTable("company")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("name");
    table.dateTime("ingress");
    table.dateTime("init_lunch_or_dinner");
    table.dateTime("turnback_lunch_or_dinner");
    table.dateTime("get_out");
  });
}

export async function down(knex: Knex): Promise<void> {}
