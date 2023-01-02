import Datatable from '../datatable';
import {useState, useEffect} from 'react'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import '../App.css'; 
require("es6-promise").polyfill();
require("isomorphic-fetch");    
function App() {
const [data,setData] = useState([])
const columns = data[0] && Object.keys(data[0])
const [order,setOrder] = useState("ASC")
const[q,setQ] = useState("")
const[searchColumns,setSearchColumns] = useState(["id"])
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())  
.then(json => setData(json))
},[]) 
    
    const sorting=(col) => {
        
            if(order === "ASC" ){
                const sorted = [...data].sort((a,b) => a[col] >b[col] ? 1: -1 );
                setData(sorted)
                setOrder("DSC")
             }
            if(order === "DSC"){
                 const sorted = [...data].sort((a,b) => a[col] < b[col] ? 1:-1);
                 setData(sorted);
                 setOrder("ASC")
             }
            
    }
    function search(rows){
        return rows.filter(row =>
          searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
           );
           
      }
      
    
    
  return (
    <body className='.bg-light-subtle'>
    <div className='container '>
        
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

       <table className='table table-dark table-striped'>
            <thead key={columns}>
    
        {
        <tr>{data[0] && columns.map(heading => <th className='heading text-uppercase text-sm font-weight-bolder opacity-7 ps-2 text-light' 
        onClick={() => sorting(`${heading}`)} scope='col'>{heading}</th>)}</tr>
    };
            </thead>

             <tbody>
              {search(data).map(row => <tr>
        {
            columns.map(column => <td  className="text-xs font-weight-bold"> {row[column]}</td>)
        }
    </tr>)}
            </tbody> 
            <tbody>
{/* <Datatable data={search(data)} /> */}
</tbody>
        </table>
        </div>
    </div>
    </body>
  )
}

export default App