import AntDesign from "@expo/vector-icons/AntDesign";
import * as Haptics from "expo-haptics";
import * as Notifications from "expo-notifications";
import { Link } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { registerForPushNotificationsAsync } from "@/utils/register-for-push-notifications-async";

export default function HomeScreen() {
  const onToggleButton = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const onRequestPermission = async () => {
    const result = await registerForPushNotificationsAsync();

    if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Push Notification",
          body: "This is a test notification"
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 5
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <AntDesign name="aim" size={24} color="black" />
          <Text>Welcome to&nbsp;Expo</Text>
          <Link href="/catalog">Explore</Link>
        </View>

        <TouchableOpacity onPress={onRequestPermission} className="bg-blue-200 rounded mb-2">
          <Text className="text-blue-700 text-4xl">Request Permission</Text>
        </TouchableOpacity>
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
