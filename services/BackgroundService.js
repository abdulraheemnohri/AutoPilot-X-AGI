import TriggerManager from '../automation/TriggerManager';
import AIConnector from '../ai/AIConnector';
import Logger from '../utils/Logger';

class BackgroundService {
  start() {
    Logger.log('AutoPilot Background Service started');
    TriggerManager.init();

    // Start heart beat for time-based triggers
    this.timer = setInterval(() => {
      TriggerManager.handleTimeTick();
    }, 60000); // every minute
  }

  stop() {
    clearInterval(this.timer);
    Logger.log('AutoPilot Background Service stopped');
  }

  async processInBackground(event) {
    // Background learning
    await AIConnector.analyzeBehavior(event);
  }
}

export default new BackgroundService();
