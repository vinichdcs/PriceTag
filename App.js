import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './components/TelaLogin';
import TelaCadastro from './components/TelaCadastro';
import TelaProdutos from './components/TelaProdutos';
import NovoCliente from './components/NovoCliente';
import { initializeApp } from '@react-native-firebase/app';


const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaProdutos" component={TelaProdutos} />
        <Stack.Screen name="NovoCliente" component={NovoCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
