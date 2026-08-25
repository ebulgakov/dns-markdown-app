import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { Link } from "expo-router";

export default function HomeScreen() {
  const onToggleButton = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <AntDesign name="aim" size={24} color="black" />
          <Text>Welcome to&nbsp;Expo</Text>
          <Link href="/catalog">Explore</Link>
        </View>

        <Text>get started</Text>
        <TouchableOpacity onPress={onToggleButton} className="bg-teal-200 text-red-500">
          <Text>Toggle with Haptics</Text>
        </TouchableOpacity>
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
