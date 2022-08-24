import { Switch } from "@headlessui/react";
import { useDarkMode } from "../../contexts/darkModeContext";
import { motion } from "framer-motion";

export const DarkModeToggle = () => {
  const { mode, setDarkMode } = useDarkMode();
  const isDarkMode = mode === "dark";

  return (
    <Switch
      checked={isDarkMode}
      onChange={setDarkMode}
      className={`bg-teal-400 h-8 w-16 flex rounded-full dark:bg-gray-100 p-1 ${
        mode === "dark" ? "place-content-end" : "place-content-start"
      }`}
    >
      <motion.div
        layout
        className="flex justify-center  items-center h-6 w-6 rounded-full bg-white dark:bg-gray-900"
        transition={spring}
        whileTap={{ rotate: 360 }}
      >
        {mode === "dark" ? "🌙" : "🌞"}
      </motion.div>
    </Switch>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
