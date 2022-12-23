import React from "react";
import Adminview from "../Admin/AdminView";
import { createContext } from "react";
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
const ThemeContext = createContext(themes.dark);
const  ContextHook= () => {
    return ( 
        <ThemeContext.Provider value={themes.dark}>

            <Adminview value={themes.dark}/>

        </ThemeContext.Provider>
     );
}
 
export {ContextHook , ThemeContext};