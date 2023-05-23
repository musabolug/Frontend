import './App.css';
import { Route, Routes , NavLink } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import DietList from './Pages/DietList';
function App() {
  return (
    <>
    <nav>
      <NavLink to="/"><img src="" alt="" /></NavLink>
      <NavLink to="/about">BMI Nedir?</NavLink>
      <NavLink to="/diet-list">Diyet Listesi</NavLink>
    </nav>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/diet-list' element={<DietList/>}/>
    </Routes>
    </>
  )
}

export default App;
