import './App.css';
import Contacts from './components/Contacts/index';
import {BrowserRouter as Router , Routes, Route, Link} from "react-router-dom"
import Edit from './components/Contacts/Edit';
function App() {
  return (
    <div className="App">
      <div id="container"></div>
        <Router>
        <Routes>
            <Route exact path="/contacts" component={Contacts} ></Route>
            <Route path="/edit/:id" component={Edit} ></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
