import { IColors } from "./constants/Colors";
import { ISizes } from "./constants/Sizes";
import { IShadows } from "./constants/Shadows";
export interface ITheme {
   colors: IColors;
   isLight: (value: boolean) => void;
   toggleTheme: () => void;
   isLightTheme: boolean;
   sizes: ISizes;
   shadows: IShadows;
}
