import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AGIStatusWidget = ({ status, runtime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusRow}>
        <View style={[styles.indicator, { backgroundColor: status === 'active' ? '#4CAF50' : '#FFC107' }]} />
        <Text style={styles.statusText}>{status.toUpperCase()}</Text>
      </View>
      <View style={styles.runtimeRow}>
        <Text style={styles.runtimeLabel}>Runtime:</Text>
        <Text style={styles.runtimeValue}>{runtime}</Text>
      </View>
      <View style={styles.meter}>
        <View style={[styles.meterFill, { width: '88%' }]} />
      </View>
      <Text style={styles.meterLabel}>AI Load: 88%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  indicator: { width: 10, height: 10, borderRadius: 5, marginRight: 8 },
  statusText: { color: '#fff', fontSize: 14, fontWeight: '800', letterSpacing: 1 },
  runtimeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  runtimeLabel: { color: '#999', fontSize: 12 },
  runtimeValue: { color: '#2196F3', fontSize: 12, fontWeight: 'bold' },
  meter: { height: 6, backgroundColor: '#333', borderRadius: 3, marginBottom: 8, overflow: 'hidden' },
  meterFill: { height: '100%', backgroundColor: '#2196F3' },
  meterLabel: { color: '#666', fontSize: 10, textAlign: 'right' }
});

export default AGIStatusWidget;
