import automationRepo from '../database/automationRepo';

class AutomationStore {
  constructor() {
    this.automations = [];
  }

  async load() {
    this.automations = await automationRepo.getAll();
  }

  getEnabledAutomations() {
    return this.automations.filter(a => a.enabled);
  }

  addAutomation(automation) {
    this.automations.push(automation);
    automationRepo.save(automation);
  }
}

export default new AutomationStore();
