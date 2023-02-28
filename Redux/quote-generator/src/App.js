import './App.css';
import{BrowserRouter, Routes,Route ,Link,NavLink} from "react-router-dom"
import { ReactDOM } from 'react-dom/client'
import Home from './components/Main/Home';
import Content from './components/Content';
import Code from './components/Code/Code';
function App() {
//
  return (
    <div className='App'>
       <BrowserRouter>
       <main>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/designed-quotes' element={<Content/>}/>
           <Route path='/code-quotes' element={<Code/>}/>
         </Routes>
       </main>
   </BrowserRouter>
   </div>
  );
}
export default App;
