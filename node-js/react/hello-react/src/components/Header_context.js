import {useTheme ,ThemeProvider} from '../Context/ThemeContext'

function Header_context() {
    const {theme, setTheme} = useTheme();
  return (
    <div>Active Theme: {theme}e
    <br/>
    <button onClick={() => setTheme(theme === "light"? "dark" : "light")}>Change Theme</button>
    </div>
  );
}

export default Header_context