import { NativeModules } from 'react-native';

class ScreenCaptureService {
  async capture() {
    try {
      const base64 = await NativeModules.ScreenCapture.capture();
      return `data:image/png;base64,${base64}`;
    } catch (error) {
      console.error('Screen Capture Error:', error);
      return null;
    }
  }
}
export default new ScreenCaptureService();
