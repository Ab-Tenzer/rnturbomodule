import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  console.log('whats here', navigationRef.current)
  navigationRef.current?.goBack();
}

function reset() {
  navigationRef.current?.navigate('LoggedIn', {
    screen: 'Welcome'
  })
}

export default {
  navigate,
  goBack,
  reset,
};
