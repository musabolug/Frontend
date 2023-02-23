import React from 'react'
import {useDispatch} from "react-redux"
import { deleteContact } from '../../redux/contactSlice'
function Item({item}) {
    const dispatch = useDispatch();

    const handleRemove = (id) =>{
        if(window.confirm("are you sure?"))
        dispatch(deleteContact(id))
    }
    
  return (
    <div>
        <span>{item.name}</span>
        <span>{item.phone_number}</span>
        <div  className='edit'>
        <span>Edit</span>
        <span className='deleteBtn' onClick={()=> handleRemove(item.id)}>x</span>
        </div>
    </div>
  )
}

export default Item