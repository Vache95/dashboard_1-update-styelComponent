import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>("ligth");
  const [theme2, setTheme2] = useState<string>("ligth");

  const toggleTheme = (): void => {
    if (theme !== "dark" && theme !== "darkTodo") {
      localStorage.setItem("theme", "dark");
      localStorage.setItem("theme2", "darkTodo");
      setTheme("dark");
      setTheme2("darkTodo");
    } else {
      localStorage.setItem("theme", "ligth");
      localStorage.setItem("theme2", "ligth");
      setTheme("ligth");
      setTheme2("ligth");
    }
  };
  useEffect(() => {
    const localTheme: string | null = localStorage.getItem("theme");
    const localTheme2: string | null = localStorage.getItem("theme2");
    if (localTheme && localTheme2) {
      setTheme(localTheme);
      setTheme2(localTheme2);
    }
  }, []);

  return {
    theme,
    theme2,
    toggleTheme,
  };
};
export default useTheme;
