import ActionExecutor from './ActionExecutor';
import Logger from '../utils/Logger';
import eventBus from '../utils/EventBus';

class WorkflowExecutor {
  async execute(workflow) {
    Logger.log(`Executing workflow: ${workflow.name}`);
    eventBus.publish('WORKFLOW_STARTED', workflow.name);

    for (const step of workflow.steps) {
      try {
        Logger.log(`Running step: ${step.action}`);
        await ActionExecutor.run(step);
      } catch (error) {
        Logger.error(`Step failed: ${step.action}`, error);
        eventBus.publish('WORKFLOW_FAILED', { name: workflow.name, error });
        return;
      }
    }

    Logger.log(`Workflow ${workflow.name} completed successfully.`);
    eventBus.publish('WORKFLOW_COMPLETED', workflow.name);
  }
}

export default new WorkflowExecutor();
