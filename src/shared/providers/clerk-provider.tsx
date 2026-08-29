import { ClerkProvider as ClerkProviderBase } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { Slot } from "expo-router";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not set.");
}

export function ClerkProvider() {
  return (
    <ClerkProviderBase publishableKey={publishableKey} tokenCache={tokenCache}>
      <Slot />
    </ClerkProviderBase>
  );
}
