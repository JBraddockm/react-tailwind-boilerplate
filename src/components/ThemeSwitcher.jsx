import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from 'src/hooks/useDarkMode';

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkMode] = useState(colorTheme === 'light');

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <button className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        <DarkModeSwitch checked={darkSide} size={20} onChange={toggleDarkMode} />
      </button>
    </>
  );
}
