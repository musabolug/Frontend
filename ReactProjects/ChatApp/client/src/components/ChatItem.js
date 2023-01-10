import React from "react"
import { useChat } from "../context/ChatContext"
import styles from "./styles.module.css"
function ChatItem({item}) {
    return(
        <div className={`${styles.chatItem}`}>
            {item.message}

  
        </div>
    )
}
export default ChatItem