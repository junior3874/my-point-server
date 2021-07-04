import knex from "knex";
const knexfile = require("../../knexfile");

const configuration: Object = knexfile["development" || process.env.NODE_ENV];
const connection = knex(configuration);

export default connection;
