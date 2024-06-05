import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "jotai";
import Home from "./components/Home";
import Login from "./components/Login";
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
      background: "#fff",
      error: "#FF5435",
      primary: "#87C240",
      text: "#21136F",
      accent: "#DDA372",
    },
  };

  return (
    <Provider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <GestureHandlerRootView>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
              />
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
    </Provider>
  );
}
