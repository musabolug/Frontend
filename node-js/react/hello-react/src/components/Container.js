import Button from './Button';
import Header_context from './Header_context'
import {useTheme} from '../Context/ThemeContext';
import "../App.css"
import Profile from "./Profile"
function Container() {
    const {theme} = useTheme();

  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
         <Header_context /> 
            <hr/>
            <Button />
            <hr/>
            <Profile/>
    </div>
  )
}

export default Container