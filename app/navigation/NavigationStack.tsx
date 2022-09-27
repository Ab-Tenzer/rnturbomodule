import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Buttons from '../screens/Buttons';
import DeviceCheck from '../screens/DeviceCheck';
import Welcome from '../screens/Welcome';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { ILoginState } from '../models/reducers/login';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions = {
  title: 'Buttons',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
  // headerShown: true,
  // headerMode: 'float'
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          // When logging out, a pop animation feels intuitive
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name="DeviceCheck"
        component={DeviceCheck}
        options={{
          // When logging out, a pop animation feels intuitive
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen name="Buttons" component={Buttons} options={homeOptions} />
  </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen
            name="LoggedIn"
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name="LoggedOut"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
