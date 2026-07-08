import { useEffect, useState } from 'react';

const STORAGE_KEY = 'atta-portfolio-theme';

function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}

export default useTheme;
