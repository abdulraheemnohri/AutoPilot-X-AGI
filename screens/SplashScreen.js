import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import AutoPilotLogo from '../components/AutoPilotLogo';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Root');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
        <AutoPilotLogo width={250} height={80} />
        <ActivityIndicator size="large" color="#2196F3" style={styles.loader} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginTop: 40,
  },
});

export default SplashScreen;
