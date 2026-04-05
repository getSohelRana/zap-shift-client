import React, { useEffect, useState } from 'react';
import { getTheme, setThemeToLocal } from '../utils/theme';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    setThemeToLocal(theme)
  },[theme])

  const toggleTheme = () => {
    setTheme(pre => (pre === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext value={{theme, toggleTheme}}>
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;