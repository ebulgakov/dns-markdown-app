import * as SplashScreen from "expo-splash-screen";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Tabs } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
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
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
