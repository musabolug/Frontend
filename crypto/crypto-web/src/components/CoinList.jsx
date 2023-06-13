import React from 'react'
import { Link } from "react-router-dom";
import { Sparklines,SparklinesLine  } from 'react-sparklines';
import "bootstrap/dist/css/bootstrap.min.css"

function CoinList({coin}) {
  return (
    <>
    <tr key={coin.id} className="h-20 overflow-hidden border-b text-center dark:border-white dark:border-opacity-10   ">
  
      <td className="text-xs font-medium xs:text-sm sm:text-base " >{coin.market_cap_rank}</td>
      <td>
      <img src={coin.image} title={coin.name} className=" h-2 w-2 xs:h-8 xs:w-8 sm:h-10 sm:w-10  " alt={coin.id} />
      
      </td>
      <td>
        {/* <Link to={`/coin/${coin.id}`}> */}
          <div className="mx-auto flex w-full  max-w-[150px] flex-col items-center justify-center gap-2 md:max-w-[225px] md:flex-row md:gap-5 lg:justify-start lg:gap-2.5 ">
           
           
    
            <span className="hidden overflow-hidden text-xs font-medium xs:block sm:text-sm md:w-full md:text-base">
              {coin.name}
            </span>
          </div>
        {/* </Link> */}
      </td>
      <td className="text-xs font-medium xs:text-sm">${coin.current_price.toFixed(2)}</td>
      <td className="hidden text-xs font-medium xxs:table-cell xs:text-sm ">
        {coin.price_change_percentage_24h > 0 ? (
          <p className=" text-green-500 dark:text-green-400">{coin.price_change_24h.toFixed(2).toLocaleString("tr-TR")}$</p>
        ) : (
          <p className="text-red-500 dark:text-red-500">{coin.price_change_24h.toFixed(2)}$</p>
        )}
      </td>
      <td className="text-xs font-medium  xs:text-sm ">
        {coin.price_change_percentage_24h > 0 ? (
          <p className="  text-green-500 dark:text-green-400">{coin.price_change_percentage_24h.toFixed(2).toLocaleString("tr-TR")}%</p>
        ) : (
          <p className="text-red-500  dark:text-red-500">{coin.price_change_percentage_24h.toFixed(2)}%</p>
        )}
      </td>

      <td className="hidden text-sm font-medium sm:table-cell">${coin.total_volume.toLocaleString("tr-TR")}</td>

      <td className="hidden max-w-[80px] text-sm font-medium xl:table-cell">{coin.total_supply ? coin.total_supply : "-"}</td>
      <td className="hidden text-sm font-medium xl:table-cell">${coin.market_cap.toLocaleString("tr-TR")}</td>
  
    
    </tr>
  </>
  
  )
}

export default CoinList