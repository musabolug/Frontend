import React from 'react'
import {Row , Col, Container} from "react-bootstrap"
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import  "./table.css"
import Receipt from '../Receipt/Receipt'
 import 'bootstrap/dist/css/bootstrap.min.css';
function Table() {
    const items  = useSelector((state)=> state.products.items)
    const budget = useSelector((state) => state.products.budget)
    const editBudget = Number(budget).toLocaleString();
  return (
    <div>
    <Container>
      <div className="centerMoney">${editBudget}</div>
      <Row className="containerProduct" style={{ marginLeft: "75px" }}>
        {items.map((item) => (
          <Col key={item.id} xl={4}>
            <ProductCard item={item} id={item.id} />
          </Col>
        ))}
      </Row>
      <div>
      <Receipt />
      </div>
    </Container>
  </div>
  )
}

export default Table