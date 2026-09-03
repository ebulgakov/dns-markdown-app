import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";

import type { Theme } from "expo-router";

const FONT_ASSETS = {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
  RobotoMono_400Regular
};

const THEME_FONTS: Theme["fonts"] = {
  regular: { fontFamily: "Roboto_400Regular", fontWeight: "normal" },
  medium: { fontFamily: "Roboto_500Medium", fontWeight: "normal" },
  bold: { fontFamily: "Roboto_600SemiBold", fontWeight: "normal" },
  heavy: { fontFamily: "Roboto_700Bold", fontWeight: "normal" }
};

export { FONT_ASSETS, THEME_FONTS };
