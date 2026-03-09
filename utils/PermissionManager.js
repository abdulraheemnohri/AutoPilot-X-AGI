import { PermissionsAndroid } from 'react-native';

class PermissionManager {
  async requestAll() {
    const permissions = [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ];

    try {
      const granted = await PermissionsAndroid.requestMultiple(permissions);
      return granted;
    } catch (err) {
      console.warn(err);
    }
  }
}

export default new PermissionManager();
