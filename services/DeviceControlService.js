class DeviceControlService {
  async openApp(packageName) {
    console.log(`Opening app: ${packageName}`);
    return true;
  }
}
export default new DeviceControlService();
