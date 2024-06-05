import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./components/Home";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Details from "./components/Details";
const Stack = createNativeStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "#25292e",
    },
  };
  return (
    <PaperProvider theme={theme}>
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
    </PaperProvider>
  );
}
