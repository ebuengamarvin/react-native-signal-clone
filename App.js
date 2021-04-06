import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import AddChatScreen from './src/screens/AddChatScreen';
import ChatScreen from './src/screens/ChatScreen/ChatScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2C6BED'},
  headerTitleStyle: {color: '#FFFFFF'},
  headerTintColor: '#FFFFFF',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
