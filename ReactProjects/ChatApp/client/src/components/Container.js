import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { init } from '../socketApi'
import "../App.css"
function Container() {

    useEffect(() => {
      init();  
    },[])

  return (
    <div className='App'>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container