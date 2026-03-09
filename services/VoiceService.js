import { NativeModules } from 'react-native';

class VoiceService {
  async startListening() {
    try {
      const result = await NativeModules.VoiceRecognition.startListening();
      return result;
    } catch (error) {
      console.error('Voice Service Error:', error);
      return null;
    }
  }
}
export default new VoiceService();
