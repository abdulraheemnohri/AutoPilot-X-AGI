import db from './db';

const automationRepo = {
  async getAll() {
    return await db.query('automations');
  },
  async save(automation) {
    const all = await this.getAll();
    const index = all.findIndex(a => a.id === automation.id);
    if (index !== -1) {
      all[index] = automation;
    } else {
      all.push(automation);
    }
    await db.save('automations', all);
  },
  async delete(id) {
    const all = await this.getAll();
    const filtered = all.filter(a => a.id !== id);
    await db.save('automations', filtered);
  }
};

export default automationRepo;
