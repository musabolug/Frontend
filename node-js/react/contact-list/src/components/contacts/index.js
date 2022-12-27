import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'

import  "./style.css"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Musab",
            phone_number:"05537043625",
        },
        {
            fullname:"Bera",
            phone_number:"05052150208",
        },
        {
            fullname:"Mansur",
            phone_number:"05395063625",
        }

    ]);
    
    useEffect(() =>{
    console.log(contacts)
    }, [contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts