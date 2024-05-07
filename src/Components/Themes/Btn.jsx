import React, {useContext} from "react";
import useTheme, {ThemeProvider} from "../../Context/themeContext";

function Btn() {
  // const {thmeBtn} = useContext(ThemeProvider);
  const {themeMode, darkTheme, lightTheme} = useTheme();
  const onChangeTheme = (e) => {
    const darkMode = e.currentTarget.checked;
    if (darkMode) {
      darkTheme(themeMode);
    } else {
      lightTheme(themeMode);
    }
  };
  return (
    <div className="my-2">
      <label className="inline-flex items-center cursor-pointer">
        <input
          onChange={onChangeTheme}
          type="checkbox"
          value=""
          checked={themeMode === "dark"}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Toggle me
        </span>
      </label>
    </div>
  );
}

export default Btn;
