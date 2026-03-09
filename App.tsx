import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import BackgroundService from './services/BackgroundService';
import PermissionManager from './utils/PermissionManager';

const App = () => {
  useEffect(() => {
    // Initialize system
    PermissionManager.requestAll();
    BackgroundService.start();

    return () => {
      BackgroundService.stop();
    };
  }, []);

  return <AppNavigator />;
};

export default App;
