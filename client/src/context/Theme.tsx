import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode } from "react";
// import ThemeToggle from "../ThemeToggle";

interface Theme {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
}
const themeContext = createContext<Theme>({ theme: "", setTheme: () => "" });
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("dark");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
export const useTheme = () => {
  return useContext(themeContext);
};
export default ThemeProvider;
