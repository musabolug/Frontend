import logo from './logo.svg';
import './App.css'; 
import Header from './Header.js';
import User from './user.js';
const name = "Musab";
const isLoggedIn = true;

const friends =[
  {
    id: 1,
    name: "Musab"
  },
  {
    id: 2,
    name: "Bera"
  },
  {
    id: 3,
    name: "Mansur"
  },
]

function App() {
  return (
    <div className="App">
        <Header />
    {/* <h1>{isLoggedIn && `Merhaba Benim adim ${name}`}</h1>
    {!isLoggedIn && "Giris Yapamadiniz"} */}
  {/* <h1>
  {isLoggedIn
    ?`Benim adım ${name}`
    : "Giris Yapamadınız "}
  </h1> */}

  <User name="Musab" 
  surname="Olug" 
  isLoggedIn={true}
  age={20}                                                                                                                                        
  friends={friends}
  />
    </div>
  );
}

export default App;
