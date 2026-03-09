class ScreenCaptureService {
  async capture() {
    console.log('Capturing screen...');
    return 'screenshot_data';
  }
}
export default new ScreenCaptureService();
