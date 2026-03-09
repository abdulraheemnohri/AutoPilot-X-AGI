import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenMonitorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Monitor</Text>
      <View style={styles.preview}>
        <Text style={styles.placeholder}>AI Screen Observation Active</Text>
      </View>
      <View style={styles.nodes}>
        <Text style={styles.nodeItem}>- Button (Play)</Text>
        <Text style={styles.nodeItem}>- EditText (Search)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  preview: { height: 300, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
  placeholder: { color: '#666' },
  nodes: { marginTop: 20 }
});

export default ScreenMonitorScreen;
