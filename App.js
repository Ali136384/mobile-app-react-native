import { StatusBar } from "expo-status-bar";
import { ImageComponent, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchBar from "./src/components/SearchBar";
import HomeScreen from "./src/screens/HomeScreen";
import SingleResult from "./src/screens/SingleResult";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="search"
          component={SearchBar}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="SingelResult/:id"
          component={SingleResult}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
