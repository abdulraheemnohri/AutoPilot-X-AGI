const learningRepo = {
  async savePattern(pattern) {
    console.log('Pattern learned:', pattern);
  },
  async getPatterns() {
    return [];
  }
};
export default learningRepo;
