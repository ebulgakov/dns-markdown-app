import { Stack } from "expo-router";
import { ExpoClerkProvider } from "@/shared/providers";
import { TouchableOpacity, Text } from "react-native";
import { useAuth } from "@clerk/expo";

function ProfileStack() {
  const { signOut } = useAuth();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Профиль",
          headerRight: () => (
            <TouchableOpacity onPress={() => signOut()}>
              <Text style={{ color: "#007AFF", fontSize: 16 }}>Выход</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen name="sign-in" options={{ title: "Вход" }} />
      <Stack.Screen name="sign-up" options={{ title: "Регистрация" }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ExpoClerkProvider>
      <ProfileStack />
    </ExpoClerkProvider>
  );
}
