import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/screen/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>

    

    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>

   </NavigationContainer>
  );
}

