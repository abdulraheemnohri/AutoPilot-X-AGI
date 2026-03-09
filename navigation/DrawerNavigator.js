import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import DeviceControlScreen from '../screens/DeviceControlScreen';
import LogsScreen from '../screens/LogsScreen';
import ScreenMonitorScreen from '../screens/ScreenMonitorScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={TabNavigator} />
      <Drawer.Screen name="Device Control" component={DeviceControlScreen} />
      <Drawer.Screen name="Screen Monitor" component={ScreenMonitorScreen} />
      <Drawer.Screen name="Logs" component={LogsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
