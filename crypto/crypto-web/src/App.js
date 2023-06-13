import './App.css';
import Navbar from "./components/Navbar"
import CoinData from './components/CoinData';
// import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css"
import Exchanges from './components/Exchanges';
import Footer from './components/Footer';
import Trends from './components/Trends';

function App() {
  return (
    <div >
    <Navbar />
    <CoinData />
    <Trends />
    <Exchanges />
    <Footer />
    </div>
  );
}

export default App;
