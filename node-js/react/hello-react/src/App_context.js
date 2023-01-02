import {useContext} from 'react';
import Container from './components/Container';

import {ThemeProvider, ThemeContext} from './Context/ThemeContext';
import {UserProvider} from './Context/UserContext';
function App_context() {
    
  return (
        <ThemeProvider>
         <UserProvider>
         <Container/>
         </UserProvider>
        </ThemeProvider>
  )
}

export default App_context