import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  changeTheme: (newTheme: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "theme-orange",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("theme-orange");

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className={`${theme} bg-bg-primary text-color-text-primary min-h-screen transition-all`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
