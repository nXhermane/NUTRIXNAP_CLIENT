import { StyleSheet } from "react-native"

export const Style = (func: (theme: Pick<ITheme, "colors" | "sizes" | "shadows">) => any):any => {
  return StyleSheet.create(func)
}