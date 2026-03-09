import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TriggerSelector = ({ onSelect }) => {
  const triggers = ['time', 'location', 'app_usage', 'notification'];
  return (
    <View style={styles.container}>
      {triggers.map(trigger => (
        <TouchableOpacity key={trigger} style={styles.item} onPress={() => onSelect(trigger)}>
          <Text>{trigger}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap' },
  item: { padding: 10, backgroundColor: '#fff9c4', margin: 5, borderRadius: 5 }
});

export default TriggerSelector;
