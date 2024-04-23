import { useThemeContext } from "../context/themeContext";

const Loader = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <div
      className={`${
        darkMode ? "custom-loader" : "light-mode-loader"
      }   absolute top-1/2 left-1/2 -translate-x-1/2 `}
    ></div>
  );
};

export default Loader;
