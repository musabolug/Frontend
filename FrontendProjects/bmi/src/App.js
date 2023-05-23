import './App.css';
import { Route, Routes , NavLink } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import DietList from './Pages/DietList';
function App() {
  return (
    <div>
   
    <nav>
      <NavLink to="/"><img className='logo' src="https://github.com/musabolug/Frontend/blob/master/FrontendProjects/bmi/public/logo.png?raw=true" alt="" /></NavLink>
      <div>
      
      <NavLink to="/">BMI hesapla</NavLink>
      <NavLink to="/about">BMI Nedir?</NavLink>
      <NavLink to="/diet-list">Diyet Listesi</NavLink>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/diet-list' element={<DietList/>}/>
    </Routes>
    </div>
  )
}

export default App;
