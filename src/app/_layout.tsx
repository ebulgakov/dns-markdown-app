import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { Tabs } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Главная", headerShown: false }} />
      <Tabs.Screen name="catalog" options={{ title: "Каталог", headerShown: false }} />
      <Tabs.Screen name="today" options={{ title: "Новое" }} />
      <Tabs.Screen name="analysis" options={{ title: "Аналитика" }} />
      <Tabs.Screen name="favorites" options={{ title: "Избранное" }} />
      <Tabs.Screen name="profile" options={{ title: "Профиль" }} />
    </Tabs>
  );
}
