import { NativeModules } from 'react-native';

class NodeScanner {
  async scanScreen() {
    try {
      const nodes = await NativeModules.AccessibilityBridge.getScreenNodes();
      return nodes;
    } catch (error) {
      console.error('Screen scan error:', error);
      return [];
    }
  }

  findNodeByText(nodes, text) {
    return nodes.find(n => n.text === text || n.hint === text);
  }
}

export default new NodeScanner();
