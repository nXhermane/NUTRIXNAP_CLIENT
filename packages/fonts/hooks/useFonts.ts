import { useFonts as expoUseFonts, FontSource } from "expo-font";
import { FONTS } from "./../constants"
export const useFonts = (map?: Record<string, FontSource>, isAddToDefault?: boolean): [boolean, Error | null] => {
  const defaultFontsMap = {
    [FONTS.primary]: require("./../assets/Roboto/Roboto-Black.ttf"),
    [FONTS.primary_l]: require("./../assets/Roboto/Roboto-Light.ttf"),
    [FONTS.primary_r]: require("./../assets/Roboto/Roboto-Regular.ttf"),
    [FONTS.primary_m]: require("./../assets/Roboto/Roboto-Medium.ttf"),
    [FONTS.primary_sb]: require("./../assets/Roboto/Roboto-Thin.ttf"),
    [FONTS.primary_b]: require("./../assets/Roboto/Roboto-Bold.ttf")
  }
  const fontsMap = isAddToDefault ? { ...defaultFontsMap, ...map } : map ? map : defaultFontsMap
  const [loaded, error] = expoUseFonts(fontsMap)
  return [loaded, error]
}