import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const VoiceButton = ({ onRecordingStart, onRecordingEnd }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPressIn={onRecordingStart}
      onPressOut={onRecordingEnd}
    >
      <Text style={styles.icon}>🎤</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#f44336', justifyContent: 'center', alignItems: 'center', elevation: 5 },
  icon: { fontSize: 30, color: '#fff' }
});

export default VoiceButton;
