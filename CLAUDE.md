# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is pnpm (pnpm-lock.yaml is authoritative; ignore README.md's `npm install`).

- `pnpm start` — start Metro with the dev client (`expo start --dev-client --clear`). This app is not run through Expo Go — native modules (Clerk, notifications, glass-effect, etc.) require a custom dev client.
- `pnpm ios` / `pnpm android` — build and run the native dev client (`expo run:ios` / `expo run:android`).
- `pnpm prebuild:ios` / `pnpm prebuild:android` — regenerate `ios/`/`android/` (`expo prebuild --platform <p> --clean`). Required after changing native config (app.json plugins, adding a native module) — see AGENTS.md's CNG rule: never hand-edit `ios/`/`android/`.
- `pnpm lint` / `pnpm lint:fix` — `expo lint` (flat ESLint config: `eslint-config-expo` + `import/order` + `@typescript-eslint/no-explicit-any: error` + Prettier).
- No test runner is installed yet (see AGENTS.md).
- Install new deps with `npx expo install <pkg>` (per AGENTS.md), not `pnpm add`/`npm install` — it resolves Expo-SDK-compatible versions.

## Architecture

- **Routing** (`src/app/`, expo-router file-based): tab routes are `index`, `catalog`, `today`, `analysis`, `favorites`, `profile`. `catalog/` and `profile/` are nested route groups with their own `_layout.tsx` (e.g. `catalog/markdown/[id].tsx` for a markdown detail screen, `profile/sign-in.tsx` / `sign-up.tsx`). Root `src/app/_layout.tsx` owns the `Tabs` navigator, splash-screen lifecycle, and global providers.
- **Auth**: `src/shared/providers/expo-clerk-provider.tsx` wraps the whole app in root `_layout.tsx`. Sign-in/sign-up/sign-out are separate feature slices (`src/features/sign-in`, `sign-up`, `sign-out`), each exposing a single component via `index.ts`, consumed from `src/app/profile/`.
- **State**: feature-local state lives next to its feature, e.g. `src/features/search/model/search-store.ts` is a zustand store scoped to the search feature — state is not centralized globally.
- **Theming** — three files must stay in sync for any color or font to actually render:
  - `src/theme/colors.ts` — `COLORS` branches on `Platform.OS` (separate iOS/Android palettes, each light+dark).
  - `src/global.css` — defines the same colors as CSS custom properties (`:root`, per platform/scheme) that NativeWind reads at runtime.
  - `tailwind.config.js` — `theme.extend.colors` maps Tailwind color names to those CSS vars via a `withOpacity()` helper (`platformSelect` between an iOS var and an `--android-*` var); `theme.extend.fontFamily` maps `font-*` classes to the literal font-family keys used by `useFonts` in `src/theme/fonts.ts` — the strings must match exactly, and `src/app/_layout.tsx` gates rendering/splash-hide on `useFonts` resolving.
  - `src/theme/nav-theme.ts` derives expo-router `Theme` objects (`NAV_THEME.light`/`dark`) from `COLORS`, consumed by `ThemeProvider` in root `_layout.tsx`.
- **Shared UI** (`src/shared/ui/`): `text.tsx` and `button.tsx` define their variants with `cva` (per AGENTS.md's styling convention) and both consume `src/theme/colors.ts`/Tailwind tokens directly rather than hardcoding values — new UI primitives should follow the same `cva` + token pattern.
- **Notifications**: `src/shared/notifications/` wraps `expo-notifications` registration/scheduling as plain functions re-exported from `index.ts`, not a provider/hook.
