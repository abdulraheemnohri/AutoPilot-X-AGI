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
    // Using ONNX for all planning as Python runtime is disabled
    Logger.log('Using ONNX for planning');
    const plan = await OnnxRuntimeBridge.runModel('workflow_planner.onnx', { command });
    return plan;
  }

  async analyzeBehavior(data) {
    Logger.log('Analyzing user behavior pattern with TFLite');
    // Fallback to TFLite/ONNX for behavior analysis
    return await TensorFlowLiteBridge.predict('behavior_model.tflite', data);
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
