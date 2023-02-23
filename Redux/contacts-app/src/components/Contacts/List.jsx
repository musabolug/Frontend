import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { contactSelectors ,removeAllContacts} from '../../redux/contactSlice'
import Item from "./Item"
function List() {
    const contacts = useSelector(contactSelectors.selectAll)
    const dispatch = useDispatch()
    
    const handleDeleteAll = () =>{
        if(window.confirm("are you sure ?")){
            dispatch(removeAllContacts())
        }

    }

  return (  
    <div>
        <div className='deleteAllBtn' onClick={handleDeleteAll}>Delete All</div>
        <ul>
        {
            contacts.map(contact => (<Item key={contact.id} item={contact} />))
        }
        </ul>
    </div>
  )
}

export default List