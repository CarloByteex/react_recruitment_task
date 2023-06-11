import { useEffect, useState } from "react"

const useColorMode = () => {

  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Save theme to local Storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme])

  return { colorTheme, setTheme }
}

export default useColorMode