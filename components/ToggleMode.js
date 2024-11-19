"use client"
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <button
      onClick={toggleMode}
      type="button"
      className="relative rounded-full  p-1 text-[--first-gray] hover:bg-[--first-gray] hover:text-[--bg-color] "
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      {darkMode ? <SunIcon aria-hidden="true" className=" size-6" /> : <MoonIcon aria-hidden="true" className=" size-6 " />}
    </button>
  );
};

export default ToggleMode;
