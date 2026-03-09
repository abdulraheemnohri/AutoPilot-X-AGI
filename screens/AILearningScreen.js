import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AILearningScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Learning Dashboard</Text>
      <View style={styles.statsBox}>
        <Text>Patterns Detected: 12</Text>
        <Text>Model Confidence: 88%</Text>
        <Text>Runtimes: Python, TFLite, ONNX</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  statsBox: { padding: 20, backgroundColor: '#e8f5e9', borderRadius: 10 }
});

export default AILearningScreen;
