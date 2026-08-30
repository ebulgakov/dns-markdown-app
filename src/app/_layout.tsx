import "@/global.css";

import AntDesign from "@expo/vector-icons/AntDesign";
import { DarkTheme, DefaultTheme, ThemeProvider, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { ExpoClerkProvider } from "@/shared/providers";

SplashScreen.preventAutoHideAsync();

function AppTabs() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: "Каталог",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <AntDesign name="inbox" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="today"
        options={{
          title: "Новое",
          tabBarIcon: ({ color, size }) => <AntDesign name="bulb" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "Аналитика",
          tabBarIcon: ({ color, size }) => <AntDesign name="bar-chart" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Избранное",
          tabBarIcon: ({ color, size }) => <AntDesign name="star" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ExpoClerkProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
          <AppTabs />
        </KeyboardProvider>
      </ThemeProvider>
    </ExpoClerkProvider>
  );
}
