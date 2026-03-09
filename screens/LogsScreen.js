import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const LogsScreen = () => {
  const logs = [
    { id: '1', time: '12:00:01', message: 'Service Started' },
    { id: '2', time: '12:05:30', message: 'Rule Evaluated: Smart Morning -> True' },
    { id: '3', time: '12:05:31', message: 'Executing Action: open_app (weather)' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={logs}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text style={styles.logTime}>{item.time}</Text>
            <Text style={styles.logMessage}>{item.message}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e1e1e' },
  logItem: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#333' },
  logTime: { color: '#4caf50', width: 80 },
  logMessage: { color: '#ccc', flex: 1 }
});

export default LogsScreen;
