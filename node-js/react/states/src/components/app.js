import './App.css';
import {useState} from "react";

function App() {
  const [name,setName] = useState("Musab");
  const [age,setAge] = useState(16);
  const [friends, setFriends] = useState(["Ahmet","Furkan"]);
  const [address,setAddress] = useState({title:"Istanbul", zip:34480})
  return (
    <div className="App">
    <h1>Merhaba {name}!</h1>
    <h2>{age}</h2>

    <button onClick={() => setName("Bera")}>Chanage Name</button>
    <button onClick={() => setAge(20)}>Chanage Age</button>


    <hr />
    <br/>
    
    <h2>Friends</h2>
    {
      friends.map((friend,index) => (
        <div key={index}> {friend} </div>
      ))
    }

    <button onClick={() => setFriends([...friends,"Fatih"])}>Add a new Friend</button>
    //! ...friends kullanimi önceden atanmiş değerlerin korunumunu sağlar
    <hr />
    <br/>
    <h2>Address</h2>
    <div>
      {address.title} {address.zip}
    </div>
    <br/>

    {/* <button onClick={() => setAddress({title:"Ankara",zip: 44444})}>Chanage the Address</button> */}
    <button onClick={() => setAddress({...address,title:"Ankara"})}>Chanage the Address</button>
    //! önceki bilgieri tutup sadece şehir ismini güncelledik
    
    
    </div>
  );
}

export default App;
