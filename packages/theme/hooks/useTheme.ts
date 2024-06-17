import { useContext } from "react";
import { ThemeContext } from "./../ThemeContext";
import { ITheme } from "./../ITheme";

export const useTheme = (): ITheme => {
   return useContext(ThemeContext);
};
