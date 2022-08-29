import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './Screens/StartScreen';
import WhereToScreen from './Screens/WheretoScreen';
import ConfirmPickupScreen from './Screens/Confirmpickup';
import ChaloScreen from './Screens/ChaloScreen';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chalo" component={ChaloScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Whereto" component={WhereToScreen} />
        <Stack.Screen name="ConfirmPickup" component={ConfirmPickupScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
