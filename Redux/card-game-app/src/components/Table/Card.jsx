import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrownImage from "../../assets/crown.png";
// import "./card.css"

import {
  openCard,
  closeCard,
  correctMatch,
  falseMatch,
} from "../../redux/cardsSlice";

function Card({ sultan, handleChoice, flipped ,disabled}) {
  const [open, setOpen] = useState(false);
  const { activeCards, openedCards, closedCards, cards } = useSelector(
    (state) => state.cards
  );

  const dispatch = useDispatch();


    const handleClick=()=>{
      if(!disabled){
        handleChoice(sultan)
      }
    }
  return (
      <div className="card "  onClick={handleClick}>
        <div className={flipped ? `flipped` : ``}>
          <div className="content front">
    <img src={CrownImage} alt="" className="crown" />
    </div>
    <div className="content back">
    <img src={sultan.image} alt=""  className="image "/>
    </div>
    </div>
    </div>
  );
}

export default Card;
