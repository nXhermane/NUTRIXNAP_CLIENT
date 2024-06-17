import { createContext } from "react";
import { ITheme } from "./ITheme";
export const ThemeContext = createContext<ITheme>({} as ITheme);
