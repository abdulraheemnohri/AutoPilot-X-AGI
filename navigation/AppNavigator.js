import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import AutomationBuilderScreen from '../screens/AutomationBuilderScreen';
import VoiceCommandScreen from '../screens/VoiceCommandScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={DrawerNavigator} />
        <Stack.Screen name="AutomationBuilder" component={AutomationBuilderScreen} />
        <Stack.Screen name="VoiceCommand" component={VoiceCommandScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
