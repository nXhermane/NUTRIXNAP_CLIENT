type ColorBaseName = "primary" | "secondary" | "tertiary";

type BgColorName = ColorBaseName;
interface BackgroundColors extends Record<BgColorName, string> {}

type TextColorName = ColorBaseName | "placeholder";
interface TextColors extends Record<TextColorName, string> {}

type ColorName =
   | "blue100"
   | "blue200"
   | "blue300"
   | "purple100"
   | "purple200"
   | "purple300"
   | "yellow100"
   | "yellow200"
   | "yellow300"
   | "red100"
   | "red200"
   | "red300"
   | "green100"
   | "green200"
   | "green300"
   | "gray100"
   | "gray200"
   | "gray300"
   | "black100"
   | "black200"
   | "black300"
   | "w100"
   | "w200"
   | "w300"
   | "error"
   | "warning"
   | "success";

export interface IColors extends Record<ColorBaseName & ColorName, string> {
   bg: BackgroundColors;
   text: TextColors;
}

export interface ThemeColor {
   light: IColors;
   dark: IColors;
}

export default {
   light: {
      blue100: "#eef5ff",
      blue200: "#d9e8ff",
      blue300: "#2970ff",
      purple100: "#f5f3ff",
      purple200: "#ede9fe",
      purple300: "#875bf7",
      yellow100: "#fffaeb",
      yellow200: "#ffefc6",
      yellow300: "#fdb022",
      red100: "#FCE4EC",
      red200: "#F8BBD0",
      red300: "#EC407A",
      green100: "#66BB6A",
      green200: "#43A047",
      green300: "#2E7D32",
      greenBg: "#f0fdf4",
      gray100: "#E0E0E0",
      gray200: "#9E9E9E",
      gray300: "#757575",
      black100: "#444444",
      black200: "#424242",
      black300: "#212121",
      w100: "#F6F6F6",
      w200: "#e7e7e7",
      w300: "#d1d1d1",
      bg: {
         primary: "#ffffff",
         secondary: "#E9EDF6",
         tertiary: "#2551eb",
      },
      text: {
         primary: "#050404",
         secondary: "#716969",
         tertiary: "#716969",
         placeholder: "#AFB2BF",
      },
      error: "red",
      warning: "orange",
      success: "green",
   },
   dark: {
      blue100: "#eef5ff",
      blue200: "#d9e8ff",
      blue300: "#2970ff",
      purple100: "#f5f3ff",
      purple200: "#ede9fe",
      purple300: "#875bf7",
      yellow100: "#fffaeb",
      yellow200: "#ffefc6",
      yellow300: "#fdb022",
      red100: "#FCE4EC",
      red200: "#F8BBD0",
      red300: "#EC407A",
      green100: "#66BB6A",
      green200: "#43A047",
      green300: "#2E7D32",
      greenBg: "#f0fdf4",
      gray100: "#E0E0E0",
      gray200: "#9E9E9E",
      gray300: "#757575",
      black100: "#F5F5F5",
      black200: "#FAFAFA",
      black300: "#f1f1f1",
      w100: "#F6F6F6",
      w200: "#e7e7e7",
      w300: "#d1d1d1",
      bg: {
         primary: "#000000",
         secondary: "#1E1F21",
         tertiary: "#2551eb",
      },
      text: {
         primary: "#EAEAEA",
         secondary: "#e6e9ef",
         tertiary: "#e6e9ef",
         placeholder: "#e3e3e3",
      },
      error: "red",
      warning: "orange",
      success: "green",
   },
} as ThemeColor;
