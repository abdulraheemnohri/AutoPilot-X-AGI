import { NativeModules } from 'react-native';

class PythonRuntimeBridge {
  async execute(scriptPath, params) {
    try {
      const result = await NativeModules.PythonRuntime.run(scriptPath, JSON.stringify(params));
      return JSON.parse(result);
    } catch (error) {
      console.error('Python execution error:', error);
      return { status: 'error', message: error.message };
    }
  }

  async planTask(command) {
    return await this.execute('main.py', { action: 'plan_task', command });
  }
}

export default new PythonRuntimeBridge();
