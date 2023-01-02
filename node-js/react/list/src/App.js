import './App.css'; 
import {useState ,useEffect} from "react";
import Datatable from "./datatable"
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const[data,setData] = useState([])  
  const[q,setQ] = useState("")
  const[searchColumns,setSearchColumns] = useState(["id","name","email"])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(json => setData(json));
  }, [])
  
  function search(rows){
    return rows.filter(row =>
      searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
       );
  }
 
  const columns = data[0] && Object.keys(data[0]);
 
  return (
    <div >
      <div className='filter'>  
      
       <input className='input'  type="text " value={q} onChange={(e) => setQ(e.target.value)}/>
       {
        columns && columns.map(column => <label >
           <input type="checkbox" 
           checked={searchColumns.includes(column)}
           onChange = {(e) => {
           const checked = searchColumns.includes(column)
            setSearchColumns((prev) => checked 
              ? prev.filter((sc) => sc !== column)
              :[...prev, column]
              );
           }}
           />
           {column}
        </label>)
       }
      </div>
      <div>
        <Datatable
        data={search(data)}
        />
      </div>
    </div>
  );
}

export default App;
