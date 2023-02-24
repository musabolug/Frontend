import {useEffect, useState} from 'react'
import React from "react"
import "./table.css"
import Card from "./Card"
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { correctMatch, falseMatch,setMatch } from '../../redux/cardsSlice'
// import "./card.css"
function Table() {
  const {activeCards, openedCards, closedCards,cards, beginScore} = useSelector((state)=> state.cards)
  const [choiceOne,setChoiceOne] = useState(null)
  const [choiceTwo,setChoiceTwo] = useState(null)
  const [turns,setTurns] = useState(0);
  const [disabled,setDisabled] = useState(false)

  const dispatch = useDispatch()


  const handleChoice = (sultan)=>{
    choiceOne ? setChoiceTwo(sultan) : setChoiceOne(sultan)
  }

  const resetTurn = () =>{
    setChoiceOne(null);
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)
    setDisabled(false)
  }
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.name === choiceTwo.name){
         
            cards.map((sultan)=>{
              if(sultan.name=== choiceOne.name){
                  //! Matched değeri true olmalı              
                  console.log(sultan)
                  dispatch(setMatch(sultan.id))
              }else{
                return sultan
              }
            })
            dispatch(correctMatch())
          resetTurn()
      }else{
       setTimeout(()=>  resetTurn(),1000 )
       dispatch(falseMatch())
      }
    }
  },[choiceOne,choiceTwo])
  console.log(cards)

 
  return (
    <>
    {openedCards <24 && beginScore > 0 &&
    <Container className='w-full grid grid-cols-6 gap-2 mx-auto container'>
        <Row>
           {React.Children.toArray(
          cards.map((sultan) => <Col className='col'>
            <Card sultan={sultan}
             key={sultan.id}
              handleChoice={handleChoice} 
              flipped={sultan === choiceOne || sultan === choiceTwo || sultan.matched /*||  openedCards */  }
              disabled={disabled}
              />
            </Col>)
        )}

      </Row>
   </Container>
   }
   {
    openedCards >= 24 &&
    <div className='win'>
      <h1 className='win'>YOU WIN CONGRATULATIONS</h1>
    </div>
   }
   {
    beginScore <= 0 &&
    <div className='lose'>
            <h1 className='lose'>YOU LOST</h1>
    </div>
   }
   </>
  )
}

export default Table