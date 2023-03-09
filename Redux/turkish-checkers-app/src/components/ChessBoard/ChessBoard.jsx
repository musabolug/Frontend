import {useEffect,useState} from 'react'
import "./chessboard.css"
import Row from './Row/Row'
import {useSelector} from "react-redux"

function ChessBoard() {
const {board, gameStatus} = useSelector((state)=> state.game)
const [rows,setRows] = useState([])
    
        useEffect(()=>{
            setRows(
                Array(Math.ceil(board.length/8)).fill().map(function (_,i){
                    return board.slice(i*8,i*8+8)
                })
            )
        },[board])
      return (
    
    <div className='chessboard'>

        <div className='chessboard'>
        {/* table */}
            {
                rows.map((rowData, index)=>(
                <Row key={index} rowInfo={rowData}/>
                ))
            }
        </div>

    </div>
  )
}
export default ChessBoard