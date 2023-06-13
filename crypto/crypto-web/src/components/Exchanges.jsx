import { useState,useEffect } from "react"
import React from 'react'
import axios from "axios"
function Exchanges() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetchData();
    },[])
    

    const fetchData = async ()=>{
        try{
            const response = await axios.get("https://api.coingecko.com/api/v3/exchanges")
            const limitedList = response.data.slice(0,16)
            setData(limitedList)
            // console.log(response.data)
         
        }
        catch(error){
            console.log(error)
        }
    }
    console.log(data)
  return (
    <div  id="exchanges"className="text-light  ">
        <br />
        <h1 className="ms-4 text-center" >Exchanges</h1>
<div className="mx-4 d-flex row justify-content-center">
    {data &&
    data.map((coin) => {
        return ( <div key={coin.id} className="card text-bg-dark col-6 col-md-4 rounded-4 m-4 " style={{maxWidth: "18rem"}}>
               <div className=" d-flex justify-content-center mt-3">
            <img src={coin.image} className="rounded-circle w-25 " alt="" />
            </div>
        <div className="card-body  ">
          <h5 className="card-title  text-center">{coin.name}</h5>
          <p className="card-text text-center">{coin.country}</p>
        </div>
      </div>)
    })
}

</div>
    </div>
  )
}

export default Exchanges