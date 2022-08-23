import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUpdateEffect } from "../hooks/useUpdateEffect";

type DarkModeContextType = {
  mode: "light" | "dark";
  toggleMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const useDarkMode = () =>
  useContext(DarkModeContext) as DarkModeContextType;

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<DarkModeContextType["mode"]>("dark");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(mode === "dark" ? "light" : "dark");
    root.classList.add(mode);
  }, [mode]);

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
