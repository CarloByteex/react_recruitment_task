import { useState } from "react";
import useColorMode from "../../hooks/useColorMode";
import { FiMoon, FiSun } from "react-icons/fi";

const ColorSwitcher = () => {

  const { colorTheme, setTheme } = useColorMode();
  const [dark, setDark] = useState(colorTheme === "light" ? true : false)

  const toggleTheme = () => {
    setTheme(colorTheme)
    if(colorTheme === 'dark'){
      setDark(true)
    }else{
      setDark(false)
    }
  }

  return (
    <div className="cursor-pointer text-gray-600 flex items-center bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 p-2.5 rounded-lg" onClick={toggleTheme}>
      {dark ? (
        <FiMoon className="h-5 w-5 text-gray-600 dark:text-white" />
      ) : (
        <FiSun className="h-5 w-5 text-gray-600 dark:text-white" />
      )}
    </div>
  )
}

export default ColorSwitcher;
