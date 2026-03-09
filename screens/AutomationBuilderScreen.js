import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AutomationBuilderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Automation</Text>
      <View style={styles.section}>
        <Text style={styles.label}>When...</Text>
        <Text style={styles.placeholder}>Select Trigger</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Then...</Text>
        <Text style={styles.placeholder}>Add Action</Text>
      </View>
      <Button title="Save Automation" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  section: { marginBottom: 30, padding: 15, backgroundColor: '#f9f9f9', borderRadius: 8, borderStyle: 'dashed', borderWidth: 1, borderColor: '#ccc' },
  label: { fontSize: 16, color: '#666', marginBottom: 5 },
  placeholder: { fontSize: 18, color: '#999' }
});

export default AutomationBuilderScreen;
