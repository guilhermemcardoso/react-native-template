import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { withTheme, ThemeContext } from 'styled-components/native';
import {switchTheme} from './services/theme';
import { useDispatch, useSelector } from 'react-redux';
import SwitchTheme from './components/switchTheme';
import { darkTheme, lightTheme } from './styles/themes';

import Icon from './components/icon';

import LoginScreen from './screens/Login';
import LogoutScreen from './screens/Logout';
import RegisterScreen from './screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  const theme = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } 
          
          if (route.name === 'Register') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          }
          
          if (route.name === 'Logout') {
            iconName = focused ? 'log-out' : 'log-out-outline';
          }
          
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.BOTTOM_NAVIGATION_ACTIVE_ITEM_COLOR,
        inactiveTintColor: theme.BOTTOM_NAVIGATION_INACTIVE_ITEM_COLOR,
        style: { backgroundColor: theme.BOTTOM_NAVIGATION_BACKGROUND_COLOR },
      }}
    >
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const currentTheme = useSelector((state) => state.theme.current);
  const dispatch = useDispatch();

  const handleSwitchTheme = (value) => {
    !value ? dispatch(switchTheme(lightTheme)) : dispatch(switchTheme(darkTheme));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: currentTheme.HEADER_BACKGROUND_COLOR,
            },
            headerRight: () => <SwitchTheme labels={['Light', 'Dark']} value={currentTheme.mode !== 'light'} setValue={handleSwitchTheme} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(Router);
