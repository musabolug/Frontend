import {useContext} from 'react'
import {ThemeContext ,ThemeProvider} from '../Context/ThemeContext'

function Header_context() {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div>Active Theme: {theme}
    <br/>
    <button onClick={() => setTheme(theme === "light"? "dark" : "light")}>Change Theme</button>
    </div>
  );
}

export default Header_context