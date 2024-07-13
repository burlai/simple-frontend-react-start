import React, { useState } from "react";

const ThemeToggle: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <p>Зараз маємо {isDarkTheme ? "темну" : "світлу"} тему</p>
      <button onClick={toggleTheme}>
        {isDarkTheme ? "Увімкни світлу" : "Увімкни темну"}
      </button>
    </div>
  );
};

export default ThemeToggle;
