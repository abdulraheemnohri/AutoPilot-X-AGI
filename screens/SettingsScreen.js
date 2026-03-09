import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import AutoPilotLogo from '../components/AutoPilotLogo';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <AutoPilotLogo width={210} height={60} />
      </View>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text>Enable Background Service</Text>
        <Switch value={true} />
      </View>
      <View style={styles.setting}>
        <Text>AI Intent Detection</Text>
        <Switch value={true} />
      </View>
      <View style={styles.setting}>
        <Text>Auto-Learning Patterns</Text>
        <Switch value={true} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FB' },
  logoContainer: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  setting: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }
});

export default SettingsScreen;
