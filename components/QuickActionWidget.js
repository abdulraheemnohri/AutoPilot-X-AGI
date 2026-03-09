import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuickActionWidget = ({ actions }) => {
  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.actionItem}>
          <Text style={styles.icon}>{action.icon}</Text>
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  actionItem: {
    width: '23%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  icon: { fontSize: 24, marginBottom: 5 },
  label: { fontSize: 10, fontWeight: '600', color: '#333' }
});

export default QuickActionWidget;
