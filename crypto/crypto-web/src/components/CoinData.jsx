import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../main.css"

 import { useTranslation } from "react-i18next";
 import { toast } from "react-hot-toast";
 import CoinList from "./CoinList"
function CoinData() {
    const [data,setData] = useState([])
    const [SearchValue, setSearchValue] = useState("")
    useEffect(()=>{
        fetchData();
        
    },[])
  

    const fetchData = async ()=>{
        try{
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            setData(response.data)
            // console.log(response.data)
         
        }
        catch(error){
        }
    }
  return (
    <div className=" d-flex justify-content-center    bg-body" >
      <table className="table  table-primary text-white  text-center my-table" >
       <thead className="h-10 text-sm font-normal dark:text-white">
            <tr className="border-b px-4 dark:border-white dark:border-opacity-10">
                <th className="me-5 w-auto">
                    #
                </th>
                <th>

                </th>
                <th className="mx-5 w-auto">
                    Coin Name
                </th>
                <th className="mx-5 w-auto">
                    Price
                </th>
                <th  className="hidden xxs:table-cell mx-5 w-auto ">
                    Change(24h)
                </th>
                <th className="mx-5 w-auto">
                    24h(%)
                </th>
                <th className="mx-5 hidden sm:table-cell w-auto">
                    Volume(24h)
                </th>
                <th className="mx-5 w-25 hidden overflow-hidden px-4 xl:table-cell w-auto">
                    Total Supply
                </th>
                <th className=" hidden xl:table-cell w-auto">
                    Market Cap
                </th>
             
         
            </tr>
        </thead> 
        
        <tbody className="dark:text-white">
          { data && data.map((coin) => {
              return <CoinList coin={coin} key={coin.id} />;
            })}
        </tbody>
      </table>
    </div>
  )
}

export default CoinData