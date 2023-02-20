import {useState , useEffect} from 'react'
import {updateCount} from "../../redux/products/productsSlice"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector , useDispatch} from "react-redux"
import "./products.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
function ProductCard(item) {
    const [count,setCount] = useState(0)
    const [saleble,setSaleble] = useState("Disabled");
    const [buyable,setBuyable] = useState("Buyable");
    const budget = useSelector(state => state.products.budget)
    const dispatch = useDispatch();

    //? sending product count and id to productSlice
    useEffect(() =>{
        dispatch(updateCount({id: item.item.id, count: count}))
    },[count])

    // Buy button function
    const buy = () =>{
        setCount(Number(count) +1);
    }

    // sell button  function
    const sell = () =>{
        setCount(Number(count) -1)
    }
    // sell button activate deactivate
    useEffect(()=>{
        if(count > 0){
            setSaleble("Selable");
        }else{
            setSaleble("Disabled");
        }
    },[count])

    useEffect(()=>{
        if(item.item.productPrice > budget){
            setBuyable("Disabled")
        }else{
            setBuyable("Buyable")
        }
    },[budget])

    const handleChange = (value)=>{
        const maxCount = Math.floor(budget / item.item.productPrice) + count
        if(value && value > 0){
            if(value > maxCount && budget >= 0){
                setCount(maxCount);
            }else{
                setCount(value)
            }
        }else{
            setCount(0)
        }
    }

    
  return (
    <div >
        <Card className="card">
      <Card.Img variant="top" className="img" src={item.item.image} />
      <Card.Body className='body'>
        <Card.Title className='cardTitle'>{item.item.productName}</Card.Title>
        <Card.Text className='itemCost'>
        ${item.item.productPrice}
        </Card.Text>
        <Button  
        disabled={saleble === "Disabled"} 
        variant="primary"
        className={saleble ==="Selable"? "sellBtn" : "disabledBtn"}
        onClick={sell}
        >sell</Button>
      

        <input 
        className='input'
        value={count}
         onChange={(e) => handleChange(e.target.value)} />
         
        <Button 
        disabled={buyable === "Disabled"}
        className={buyable ==="Buyable"? "buyBtn" : "disabledBtn"}
        onClick={buy}
        variant="primary">Buy</Button>

      </Card.Body>
    </Card>
    
    </div>
    
  )
}

export default ProductCard