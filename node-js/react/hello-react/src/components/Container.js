import { useContext } from 'react';
import Button from './Button';
import Header_context from './Header_context'
import {ThemeContext} from '../Context/ThemeContext';
import "../App.css"
import Profile from "./Profile"
function Container() {
    const {theme} = useContext(ThemeContext);

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