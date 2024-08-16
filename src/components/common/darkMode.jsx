import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {
  setExpandMenu,
} from "../common/redux/sidebarSlice";
const DarkMode = () => {
  const dispatch = useDispatch();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === 'enabled';
  });

  useEffect(() => {
    const themeClass = isDarkMode ? 'dark' : 'light';
    document.documentElement.className = themeClass;

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const lightModeToggle = document.getElementById('light-mode-toggle');

    if (darkModeToggle && lightModeToggle) {
      darkModeToggle.classList.toggle('activate', !isDarkMode);
      lightModeToggle.classList.toggle('activate', isDarkMode);

      const toggleMode = (mode) => {
        dispatch(setExpandMenu(mode ? 'enabled' : 'disabled'))
        setIsDarkMode(mode);
        localStorage.setItem('darkMode', mode ? 'enabled' : 'disabled');
      };

      darkModeToggle.addEventListener('click', () => toggleMode(true));
      lightModeToggle.addEventListener('click', () => toggleMode(false));

      return () => {
        darkModeToggle.removeEventListener('click', () => toggleMode(true));
        lightModeToggle.removeEventListener('click', () => toggleMode(false));
      };
    }
  }, [isDarkMode]);


  return (
    <li className="nav-item">
      <div>
        <Link to="#" id="dark-mode-toggle" className="dark-mode-toggle">
          <i className="fa-solid fa-moon"></i>
        </Link>
        <Link to="#" id="light-mode-toggle" className="dark-mode-toggle">
          <i className="fa-solid fa-sun"></i>
        </Link>
      </div>
    </li>
  );
};

export default DarkMode;
