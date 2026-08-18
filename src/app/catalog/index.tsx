import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function CatalogScreen() {
  return (
    <View>
      <Text>Каталог</Text>
      <Link href="/catalog/markdown/123456">Explore</Link>
    </View>
  );
}
