import { Stack } from "expo-router";
import { ExpoClerkProvider } from "@/shared/providers";
import { SignOut } from "@/features/sign-out";

export default function RootLayout() {
  return (
    <ExpoClerkProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Профиль",
            headerRight: () => <SignOut />
          }}
        />
        <Stack.Screen name="sign-in" options={{ title: "Вход" }} />
        <Stack.Screen name="sign-up" options={{ title: "Регистрация" }} />
      </Stack>
    </ExpoClerkProvider>
  );
}
