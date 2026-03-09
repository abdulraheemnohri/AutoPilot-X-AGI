class SuggestionEngine {
  async getSuggestions() {
    return [
      { id: '1', type: 'automation', title: 'Home WiFi Automation', description: 'Enable Do Not Disturb when connected to home WiFi' }
    ];
  }
}
export default new SuggestionEngine();
