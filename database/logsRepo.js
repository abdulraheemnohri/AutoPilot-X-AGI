const logsRepo = {
  async add(log) {
    console.log('[LOG DB]', log);
  },
  async getRecent() {
    return [];
  }
};
export default logsRepo;
