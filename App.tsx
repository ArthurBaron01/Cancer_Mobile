import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/pages/login'; // Corrija a importação para não usar desestruturação
import { Home } from './src/pages/home';
import GridPesquisa from './src/pages/grid/index';
import { CustomCadastro } from './src/pages/cadastro'; // Importe a tela Cadastro
import CadastroPaciente from './src/pages/paciente'; // Importe a tela Cadastro Paciente


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home Tab" component={Home} />
    <Tab.Screen name="Grid Pesquisa" component={GridPesquisa} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CustomCadastro} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
