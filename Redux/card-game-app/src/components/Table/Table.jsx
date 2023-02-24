import React from 'react'
import "./table.css"
import Card from "./Card"
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Table() {
  const {cards} = useSelector((state)=> state.cards)

  return (
    <Container className='w-full grid grid-cols-6 gap-2 mx-auto container'>
        <Row>
        
        {
            // cards.map((sultan) =><Col className='col'><Card sultan={sultan} /></Col>)

        }
           {React.Children.toArray(
          cards.map((sultan) => <Col className='col'><Card sultan={sultan} /></Col>)
        )}
      
      </Row>
   </Container>
  )
}

export default Table