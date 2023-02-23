import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import CrownImage from "../../assets/crown.png"
import {openCard,closeCard,correctMatch,falseMatch} from "../../redux/cardsSlice"

function Card({sultan}) {
    const [open,setOpen] = useState(false); 
    const {activeCards, openedCards,closedCards,cards } = useSelector((state) => state.cards)

    const dispatch = useDispatch();

 const toggleHandle = () =>{
   closedCards > 0 && setOpen(true)
 }
 useEffect(()=> {
  open && dispatch(openCard(sultan.id));
 },[dispatch,open,sultan.id])
 useEffect(()=>{
  if(activeCards.length ===2){
    if(activeCards[0].name === activeCards[1].name){
      sultan.id === activeCards[0].id && dispatch(correctMatch());
      setOpen(false);
    }else{
      setTimeout(()=>{
        sultan.id === activeCards[0].id && dispatch(falseMatch());
      },700)
      setOpen(false);
    }
  }
 },[activeCards,activeCards.length,cards,dispatch,sultan.id]);

  return (
    <div>
        <div className='card' >
          <div className="flip-card">
            <div onClick={toggleHandle} className={open === true ?`flip-card-inner` : ``} >
                <div className="flip-card-front">
                    <div className='img'>
                    <img src={CrownImage} className="crown" />
                    </div>
                </div>
                <div className="flip-card-back">
                    <img src={sultan.image}></img>
                    <p>{sultan.name}</p>
                </div>
              </div>
         </div>

         </div>
    </div>
  )
}

export default Card
{/* <a href="https://www.flaticon.com/free-icons/monarchy" title="monarchy icons">Monarchy icons created by Mayor Icons - Flaticon</a> */}