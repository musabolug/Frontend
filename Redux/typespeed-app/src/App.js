import './App.css';
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import Input from './components/Input/Input';
import Words from './components/Words/Words';
function App() {
  return (
    <div className="App">
      <Header/>
      <Timer/>
      <Words/>
      <Input/>
    </div>
  );
}

export default App;
