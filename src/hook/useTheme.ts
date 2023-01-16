import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>("ligth");

  const toggleTheme = (): void => {
    if (theme !== "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "ligth");
      setTheme("ligth");
    }
  };
  useEffect(() => {
    const localTheme: string | null = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
export default useTheme;
