import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/StartScreen";
import WhereToScreen from "./screens/WheretoScreen";
import ConfirmPickupScreen from "./screens/Confirmpickup";
import ChaloScreen from "./screens/ChaloScreen";
import { NavigationContainer } from "@react-navigation/native";
import CapacityScreen from "./screens/CapacityScreen";
import SuggestedRidesScreen from "./screens/SuggestedRidesScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WhereTo"
          component={WhereToScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chalo"
          component={ChaloScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="ConfirmPickup" component={ConfirmPickupScreen} />
        <Stack.Screen
          name="Capacity"
          component={CapacityScreen}
          options={{
            title: "SELECT SEATS",
            headerStyle: {
              backgroundColor: "#28bc4e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShadowVisible: true,
          }}
        />
        <Stack.Screen
          name="Suggested Rides"
          component={SuggestedRidesScreen}
          options={{
            title: "SUGGESTED RIDES",
            headerStyle: {
              backgroundColor: "#28bc4e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShadowVisible: true,
          }}
        />
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
