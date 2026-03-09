import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActionSelector = ({ onSelect }) => {
  const actions = ['open_app', 'tap', 'swipe', 'type_text', 'wait'];
  return (
    <View style={styles.container}>
      {actions.map(action => (
        <TouchableOpacity key={action} style={styles.item} onPress={() => onSelect(action)}>
          <Text>{action}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap' },
  item: { padding: 10, backgroundColor: '#e3f2fd', margin: 5, borderRadius: 5 }
});

export default ActionSelector;
