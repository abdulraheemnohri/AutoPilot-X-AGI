import { NativeModules } from 'react-native';

class OnnxRuntimeBridge {
  async loadModel(modelPath) {
    return await NativeModules.OnnxRuntime.loadModel(modelPath);
  }

  async runModel(modelName, inputData) {
    const result = await NativeModules.OnnxRuntime.run(JSON.stringify(inputData));
    return JSON.parse(result);
  }
}

export default new OnnxRuntimeBridge();
