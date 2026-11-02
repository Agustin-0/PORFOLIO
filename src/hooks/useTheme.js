import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);//vemos si hay algo en el localstorage
  if (stored === "light" || stored === "dark") { //Si hay light o dark se retorna eso, si no sigue
    return stored;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {//se evalua si hay preferencia dark en el equipo.
    return "dark";
  }
  return "light";// si todo lo anterior falla se da por defecto el modo light
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {//Encargadode cambiar el tema y darle al localStorage algo que recordar
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return { theme, toggleTheme };
}
