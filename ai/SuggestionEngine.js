import BehaviorAnalyzer from './BehaviorAnalyzer';
import automationRepo from '../database/automationRepo';

class SuggestionEngine {
  async getSuggestions(events) {
    const patterns = await BehaviorAnalyzer.analyze(events);
    const suggestions = [];

    for (const pattern of patterns) {
      if (pattern.type === 'night_app_usage') {
        suggestions.push({
          id: `suggest_${Date.now()}_1`,
          type: 'automation',
          title: `Nightly ${pattern.appName} Optimizer`,
          description: `Automatically optimize ${pattern.appName} for nightly usage?`,
          rule: {
            trigger: { type: 'time', value: '22:00' },
            condition: { type: 'app_active', value: pattern.packageName },
            action: { type: 'system_setting', key: 'brightness', value: 0.2 }
          }
        });
      }
    }

    if (suggestions.length === 0) {
      suggestions.push({
        id: 'default_1',
        type: 'info',
        title: 'System Optimal',
        description: 'AutoPilot is observing and learning from your device usage.'
      });
    }

    return suggestions;
  }
}
export default new SuggestionEngine();
