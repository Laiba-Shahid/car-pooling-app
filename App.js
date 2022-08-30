import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./Screens/StartScreen";
import WhereToScreen from "./Screens/WheretoScreen";
import ConfirmPickupScreen from "./Screens/Confirmpickup";
import ChaloScreen from "./Screens/ChaloScreen";
import { NavigationContainer } from "@react-navigation/native";
import CapacityScreen from "./Screens/CapacityScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chalo" component={ChaloScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="WhereTo" component={WhereToScreen} />
        <Stack.Screen name="ConfirmPickup" component={ConfirmPickupScreen} />
        <Stack.Screen name="Capacity" component={CapacityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
