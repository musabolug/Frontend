import './App.css';
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import Input from './components/Input/Input';
import Words from './components/Words/Words';
import Result from './components/Result/Result';
import { useSelector } from 'react-redux';
function App() {
  const {modalOpen} = useSelector((state) => state.typespeed)
  
  return (
    <>
      {
        modalOpen === false &&
        <div className="App">
            <Header/>
            <Timer/>  
            <Words/>
            <Input/>
          </div>
        
        
      }
      {
        
        modalOpen &&
        <div className="App">
            <Result/>
          </div>
        
        
      }
     
      
    </>
  );
}

export default App;
