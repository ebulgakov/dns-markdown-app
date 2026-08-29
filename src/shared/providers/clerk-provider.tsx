import { ClerkProvider as ClerkProviderBase, ClerkLoaded, ClerkLoading } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { View, ActivityIndicator } from "react-native";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not set.");
}

type ClerkProviderProps = {
  children: React.ReactNode;
};

export function ClerkProvider({ children }: ClerkProviderProps) {
  return (
    <ClerkProviderBase publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoading>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProviderBase>
  );
}
