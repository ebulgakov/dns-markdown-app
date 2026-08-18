import { Platform, ScrollView, StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom
    }
  });

  return (
    <ScrollView
      style={[styles.scrollView]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}
    >
      <View>
        <View>
          <Text>Explore</Text>
          <Text>This starter app includes example{"\n"}code to help you get started.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
