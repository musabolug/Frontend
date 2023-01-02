import {  createContext, useState,useEffect ,useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState(localStorage.getItem("theme") ||"light");

    useEffect(() =>{
        localStorage.setItem("theme", theme);
    },[theme]);

    const values = {
        theme,
        setTheme,
    };
    
    return( <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider> )
}
const useTheme = () => useContext(ThemeContext);

export {ThemeContext,ThemeProvider, useTheme};