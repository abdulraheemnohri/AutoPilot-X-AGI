import PythonRuntimeBridge from './PythonRuntimeBridge';

class BehaviorAnalyzer {
  async analyze(events) {
    console.log('Analyzing behavioral events...', events.length);
    const result = await PythonRuntimeBridge.execute('learning/behavior_model.py', { events });

    if (result.status === 'success') {
      return result.patterns || [];
    }

    return [];
  }

  detectPatterns(events) {
    // Basic local detection logic for fast response
    const appFrequency = {};
    events.forEach(e => {
      if (e.type === 'app_open') {
        appFrequency[e.packageName] = (appFrequency[e.packageName] || 0) + 1;
      }
    });

    return Object.entries(appFrequency)
      .filter(([_, count]) => count > 3)
      .map(([packageName]) => ({ type: 'frequent_app', value: packageName }));
  }
}
export default new BehaviorAnalyzer();
