import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, { backgroundColor: '#4caf50' }]} />
      <Text style={styles.text}>AGI Active</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 10, height: 10, borderRadius: 5, marginRight: 6 },
  text: { fontSize: 14, color: '#666' }
});

export default StatusIndicator;
