import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import BackgroundService from './services/BackgroundService';
import PermissionManager from './utils/PermissionManager';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const init = async () => {
      PermissionManager.requestAll();
      BackgroundService.start();

      const lockEnabled = await AsyncStorage.getItem('biometric_lock');
      if (lockEnabled === 'true') {
        setIsLocked(true);
        handleAuth();
      }
    };
    init();

    return () => {
      BackgroundService.stop();
    };
  }, []);

  const handleAuth = async () => {
    try {
      const success = await NativeModules.BiometricAuth.authenticate();
      if (success) {
        setIsLocked(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (isLocked) {
    return (
      <View style={styles.lockContainer}>
        <Text style={styles.lockText}>AutoPilot X is Locked</Text>
        <TouchableOpacity style={styles.unlockButton} onPress={handleAuth}>
          <Text style={styles.unlockText}>Unlock with Biometrics</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <AppNavigator />;
};

const styles = StyleSheet.create({
  lockContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F9FB' },
  lockText: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  unlockButton: { padding: 15, backgroundColor: '#2196F3', borderRadius: 10 },
  unlockText: { color: '#fff', fontWeight: 'bold' }
});

export default App;
