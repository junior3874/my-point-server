import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable("work_day", (table) => {
    table.increments("id");

    table.dateTime("ingress");
    table.dateTime("init_lunch_or_dinner");
    table.dateTime("turnback_lunch_or_dinner");
    table.dateTime("get_out");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("work_day");
}
