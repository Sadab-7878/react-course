import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/screen/LoginPage';
import{ AuthContext, AuthProvider} from './src/providers/AuthProvider'

const Stack = createStackNavigator();

export default function App() {
  return (

    <AuthProvider>
      <AuthContext.Consumer>

        {(auth) => {
          auth? isLoggedIn ? (

            <NavigationContainer>
              <Stack.Navigator>

                <Stack.Screen name='Login' component={LoginPage} />

              </Stack.Navigator>
            </NavigationContainer>

          ) : (
            <View className='flex-1 justify-center items-center gap-8'>

              <Text className='text-2xl font-bold'>Welcome to the app</Text>

            </View>
          ) : <></>
        }}


      </AuthContext.Consumer>

    </AuthProvider>
  );
}

