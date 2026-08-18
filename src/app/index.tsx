import { StyleSheet, View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <AntDesign name="aim" size={24} color="black" />
          <Text>Welcome to&nbsp;Expo</Text>
          <Link href="/explore">Explore</Link>
        </View>

        <Text>get started</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row"
  }
});
