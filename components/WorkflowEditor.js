import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WorkflowEditor = ({ workflow }) => {
  return (
    <ScrollView style={styles.container}>
      {workflow?.steps.map((step, index) => (
        <View key={index} style={styles.step}>
          <Text>{index + 1}. {step.action} ({JSON.stringify(step.params)})</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  step: { padding: 10, backgroundColor: '#fff', marginBottom: 5, borderRadius: 5, borderWidth: 1, borderColor: '#eee' }
});

export default WorkflowEditor;
