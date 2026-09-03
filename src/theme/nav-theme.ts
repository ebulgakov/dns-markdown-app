import { COLORS } from "@/theme/colors";
import { THEME_FONTS } from "@/theme/fonts";

import type { Theme } from "expo-router";

const NAV_THEME: { light: Theme; dark: Theme } = {
  light: {
    dark: false,
    colors: {
      primary: COLORS.light.primary,
      background: COLORS.light.background,
      card: COLORS.light.card,
      text: COLORS.light.foreground,
      border: COLORS.light.border,
      notification: COLORS.light.destructive
    },
    fonts: THEME_FONTS
  },
  dark: {
    dark: true,
    colors: {
      primary: COLORS.dark.primary,
      background: COLORS.dark.background,
      card: COLORS.dark.card,
      text: COLORS.dark.foreground,
      border: COLORS.dark.border,
      notification: COLORS.dark.destructive
    },
    fonts: THEME_FONTS
  }
};

export { NAV_THEME };
