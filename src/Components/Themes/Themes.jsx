import React, {createContext, useEffect, useState} from "react";
import {ThemeProvider} from "../../Context/themeContext";
import {useActionData} from "react-router-dom";
import Card from "./Card";
import Btn from "./Btn";

function Themes() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className=" shadow-md border-2">
        <Card>
          <Btn></Btn>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default Themes;
