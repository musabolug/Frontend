import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from "./components/Footer/Footer"
import {CSSTransition} from "react-transition-group"
import {useState} from "react";
function App() {
  const [showFront,setShowFront] = useState(true);
  return (
    <div className="App">
      <Header />
      <Table/>
      {/* <CSSTransition
      in={showFront}
      timeout={300}
      classNames="flip"
      >
      <Card onClick={() =>{
            setShowFront((v) => !v)
      }}/>
      </CSSTransition> */}
      <Footer/>
    </div>
  );
}

export default App;
