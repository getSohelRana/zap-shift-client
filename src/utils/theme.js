export const getTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const setThemeToLocal = (theme) => {
  localStorage.setItem("theme", theme);
};
