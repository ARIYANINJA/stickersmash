import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./components/Home";
import Details from "./components/Details";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "StickerSmasher" }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
