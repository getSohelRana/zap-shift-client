import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";
import { GoMoon, GoSun } from "react-icons/go";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="swap swap-rotate cursor-pointer">
      {/* hidden checkbox */}
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      {/* sun icon */}
      <GoSun className="swap-off text-orange-400" size={25} />

      {/* moon icon */}
      <GoMoon className="swap-on text-primary" size={25} />
    </label>
  );
};

export default ThemeSwitcher;
