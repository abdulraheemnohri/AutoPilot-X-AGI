import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AutomationCard from '../components/AutomationCard';

const AutomationListScreen = ({ navigation }) => {
  const automations = [
    { id: '1', title: 'Smart Morning', description: 'Open weather and read news', active: true },
    { id: '2', title: 'Work Mode', description: 'Mute notifications at office', active: false },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={automations}
        renderItem={({ item }) => <AutomationCard {...item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AutomationBuilder')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 20 },
  fab: {
    position: 'absolute', right: 20, bottom: 20,
    backgroundColor: '#2196f3', width: 56, height: 56,
    borderRadius: 28, justifyContent: 'center', alignItems: 'center',
    elevation: 5
  },
  fabText: { color: '#fff', fontSize: 24 }
});

export default AutomationListScreen;
