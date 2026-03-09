import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VoiceCommandScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Command</Text>
      <View style={styles.micCircle}>
        <Text style={styles.micIcon}>🎙️</Text>
      </View>
      <Text style={styles.status}>Listening for "Hey AutoPilot"...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', position: 'absolute', top: 50 },
  micCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#2196f3', justifyContent: 'center', alignItems: 'center' },
  micIcon: { fontSize: 40 },
  status: { marginTop: 20, color: '#666' }
});

export default VoiceCommandScreen;
