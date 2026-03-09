import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const AutomationCard = ({ title, description, active }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>⚡</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Switch
        value={active}
        onValueChange={() => {}}
        trackColor={{ false: "#D1D1D1", true: "#81C784" }}
        thumbColor={active ? "#4CAF50" : "#F4F4F4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: { fontSize: 20 },
  content: { flex: 1 },
  title: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
  description: { fontSize: 13, color: '#777', marginTop: 3 }
});

export default AutomationCard;
