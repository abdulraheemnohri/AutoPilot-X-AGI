import EventBus from '../utils/EventBus';
import RuleEngine from './RuleEngine';
import WorkflowExecutor from './WorkflowExecutor';
import AutomationStore from './AutomationStore';

class TriggerManager {
  constructor() {
    this.listeners = [];
  }

  init() {
    EventBus.subscribe('DEVICE_EVENT', this.handleEvent.bind(this));
    EventBus.subscribe('TIME_TICK', this.handleTimeTick.bind(this));
  }

  handleEvent(event) {
    const activeAutomations = AutomationStore.getEnabledAutomations();
    activeAutomations.forEach(automation => {
      if (RuleEngine.evaluate(automation, { lastApp: event.appName })) {
        WorkflowExecutor.execute(automation.workflow);
      }
    });
  }

  handleTimeTick() {
    const activeAutomations = AutomationStore.getEnabledAutomations();
    activeAutomations.forEach(automation => {
      if (automation.condition.type === 'time' && RuleEngine.evaluate(automation, {})) {
        WorkflowExecutor.execute(automation.workflow);
      }
    });
  }
}

export default new TriggerManager();
