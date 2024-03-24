import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from './src/pages/login'; 
import { Home } from './src/pages/home'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
