const automationRepo = {
  async getAll() {
    return [
      { id: '1', title: 'Smart Morning', description: 'Open weather and read news', enabled: true, condition: { type: 'time', value: '07:00' }, workflow: { name: 'Morning', steps: [] } },
    ];
  },
  async save(automation) {
    console.log('Saving automation to DB', automation);
  }
};

export default automationRepo;
