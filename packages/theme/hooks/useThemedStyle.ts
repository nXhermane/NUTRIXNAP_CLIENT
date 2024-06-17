import { useTheme } from "./useTheme";
import { ITheme } from "./../ITheme";
export type StyleType = (theme: Pick<ITheme, "colors" | "sizes" | "shadows">) => any;
export const useThemedStyles = (styles: StyleType) => {
   const { colors, sizes, shadows }: ITheme = useTheme();
   return styles({ colors, sizes, shadows });
};
