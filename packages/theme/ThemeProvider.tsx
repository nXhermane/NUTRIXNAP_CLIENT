import { Appearance } from "react-native";
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { ITheme } from "./ITheme";
import Colors from "./constants/Colors";
import Sizes from "./constants/Sizes";
import Shadows from "./constants/Shadows";
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [isLightTheme, setLightTheme] = useState<boolean>(Appearance.getColorScheme() === "light");
   const toggleTheme = () => setLightTheme((previousState) => !previousState);
   const theme: ITheme = {
      colors: isLightTheme ? Colors.light : Colors.dark,
      toggleTheme,
      isLight: (value: boolean) => setLightTheme(value),
      sizes: Sizes,
      shadows: Shadows,
      isLightTheme,
   };
   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
