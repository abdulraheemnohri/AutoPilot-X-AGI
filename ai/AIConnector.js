import PythonRuntimeBridge from './PythonRuntimeBridge';
import TensorFlowLiteBridge from './TensorFlowLiteBridge';
import OnnxRuntimeBridge from './OnnxRuntimeBridge';
import Logger from '../utils/Logger';
import { CommandConfig } from '../utils/CommandConfig';

class AIConnector {
  isCommandAllowed(command) {
    const cmd = command.toLowerCase();

    // Check blacklist
    if (CommandConfig.blacklist.some(b => cmd.includes(b))) {
      Logger.log(`Command BLOCKED by blacklist: ${command}`);
      return false;
    }

    // Check whitelist if strict mode is on
    if (CommandConfig.strictMode) {
      if (!CommandConfig.whitelist.some(w => cmd.includes(w))) {
        Logger.log(`Command BLOCKED (not in whitelist): ${command}`);
        return false;
      }
    }

    return true;
  }

  async processCommand(command) {
    if (!this.isCommandAllowed(command)) {
      return { status: 'error', message: 'Command not allowed for security reasons.' };
    }

    Logger.log(`AI Connector processing: ${command}`);

    // 1. Fast intent classification with TFLite
    const intentResult = await TensorFlowLiteBridge.predict('intent_model.tflite', command);
    Logger.log(`Intent detected: ${intentResult.intent} (${intentResult.confidence})`);

    // 2. Decide engine for planning
    if (intentResult.confidence > 0.8) {
      Logger.log('Using Python Runtime for complex planning');
      const plan = await PythonRuntimeBridge.planTask(command);
      return plan;
    } else {
      Logger.log('Low confidence, using ONNX for fallback planning');
      const fallbackPlan = await OnnxRuntimeBridge.runModel('workflow_planner.onnx', { command });
      return fallbackPlan;
    }
  }

  async analyzeBehavior(data) {
    Logger.log('Analyzing user behavior pattern');
    return await PythonRuntimeBridge.execute('learning/behavior_model.py', data);
  }

  async downloadModelFromHuggingFace(url, fileName) {
    Logger.log(`Downloading model from Hugging Face: ${url}`);
    try {
      const { NativeModules } = require('react-native');
      const localPath = await NativeModules.ModelDownloader.downloadModel(url, fileName);
      return { status: 'success', localPath };
    } catch (error) {
      Logger.error('Model download failed', error);
      return { status: 'error', message: error.message };
    }
  }
}

export default new AIConnector();
