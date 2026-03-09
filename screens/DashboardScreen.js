import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import StatusIndicator from '../components/StatusIndicator';
import AutoPilotLogo from '../components/AutoPilotLogo';
import AutomationCard from '../components/AutomationCard';
import QuickActionWidget from '../components/QuickActionWidget';
import AGIStatusWidget from '../components/AGIStatusWidget';

const DashboardScreen = () => {
  const quickActions = [
    { label: 'Morning', icon: '🌅' },
    { label: 'Focus', icon: '💻' },
    { label: 'Relax', icon: '🌙' },
    { label: 'Workout', icon: '🏋️' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.logoContainer}>
        <AutoPilotLogo width={210} height={60} />
      </View>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.title}>AbdulRaheem</Text>
        </View>
        <StatusIndicator />
      </View>

      <AGIStatusWidget status="active" runtime="Python 3.12 (Embedded)" />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <QuickActionWidget actions={quickActions} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Automations</Text>
        <AutomationCard
          title="Smart Morning"
          description="Optimizing your morning routine"
          active={true}
        />
        <AutomationCard
          title="Work Focus"
          description="Blocking distractions"
          active={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI Recommendations</Text>
        <TouchableOpacity style={styles.recommendationCard}>
          <Text style={styles.recommendationText}>
            Suggested: Create "Evening Relax" automation based on your 8 PM Spotify usage.
          </Text>
          <Text style={styles.learnMore}>Tap to create →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FB' },
  contentContainer: { paddingBottom: 100 },
  logoContainer: {
    paddingHorizontal: 25,
    paddingTop: 40,
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { fontSize: 16, color: '#999', fontWeight: '500' },
  title: { fontSize: 28, fontWeight: '900', color: '#1A1A1A' },
  section: { paddingHorizontal: 25, marginBottom: 30 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#1A1A1A', marginBottom: 15 },
  recommendationCard: {
    padding: 22,
    backgroundColor: '#E3F2FD',
    borderRadius: 25,
    borderLeftWidth: 8,
    borderLeftColor: '#2196F3',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  recommendationText: { fontSize: 16, color: '#1E3A5F', lineHeight: 24, fontWeight: '500' },
  learnMore: { marginTop: 12, color: '#2196F3', fontWeight: '800', fontSize: 14 }
});

export default DashboardScreen;
