import { Slot } from "expo-router";
import { ExpoClerkProvider } from "@/shared/providers";

export default function RootLayout() {
  return (
    <ExpoClerkProvider>
      <Slot />
    </ExpoClerkProvider>
  );
}
