class Database {
  async query(sql, params) {
    console.log(`Executing query: ${sql}`);
    return [];
  }

  async execute(sql, params) {
    console.log(`Executing command: ${sql}`);
  }
}

export default new Database();
