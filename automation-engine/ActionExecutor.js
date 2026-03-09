import GestureController from '../accessibility/GestureController';
import DeviceControlService from '../services/DeviceControlService';

class ActionExecutor {
  async run(step) {
    const { action, params } = step;

    switch (action) {
      case 'open_app':
        return await DeviceControlService.openApp(params.app);
      case 'tap':
        return await GestureController.tap(params.x, params.y);
      case 'swipe':
        return await GestureController.swipe(params.x1, params.y1, params.x2, params.y2);
      case 'type_text':
        return await GestureController.typeText(params.text);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

export default new ActionExecutor();
