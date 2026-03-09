import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DeviceControlScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Control</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.button}><Text>Toggle WiFi</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Toggle Bluetooth</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Mute Audio</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Take Screenshot</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  button: { width: '48%', padding: 20, backgroundColor: '#eee', borderRadius: 10, marginBottom: 15, alignItems: 'center' }
});

export default DeviceControlScreen;
