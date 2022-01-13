import { useEffect, useState } from "react";
import { ThemeContext, themes } from "./color-mode-context";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch(theme) {
      case themes.light:
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        document.getElementById("root").classList.remove("dark");
        document.body.style.background = "#fff";
        break;
      case themes.dark:
      default:
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        document.getElementById("root").classList.add("dark");
        document.body.style.background = "#34495e";
        break;
    }
  }, [theme]);

  return(
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: changeTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}