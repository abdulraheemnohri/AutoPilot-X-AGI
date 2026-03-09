import { NativeModules } from 'react-native';

class TensorFlowLiteBridge {
  async loadModel(modelPath) {
    return await NativeModules.TensorFlowLite.loadModel(modelPath);
  }

  async predict(modelName, inputData) {
    const result = await NativeModules.TensorFlowLite.predict(inputData);
    return JSON.parse(result);
  }
}

export default new TensorFlowLiteBridge();
