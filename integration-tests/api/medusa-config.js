const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

console.log(DB_USERNAME, DB_PASSWORD);

module.exports = {
  plugins: [],
  projectConfig: {
    // redis_url: REDIS_URL,
    database_url: `postgres://${DB_USERNAME}:${DB_PASSWORD}@localhost/medusa-integration`,
    database_type: "postgres",
  },
};
