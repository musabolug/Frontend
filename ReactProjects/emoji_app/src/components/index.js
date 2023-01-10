import {useState} from 'react'
import * as emoji from "emoji-api";

// const defaultItems = [
//     Emoji, {
//         _data: {
//           emoji: '🥺',
//           name: 'pleading face',
//           group: 'Smileys & Emotion',
//           sub_group: 'face-concerned',
//           codepoints: '1F97A'
//         }
//       }
// ]

/**
 *! Find emoji by name
 *! @param name The emoji name
 
*!export function findByName(name: string): Emoji | null {
  *!  const found = all().find(e => e.name.toLowerCase() === name.toLowerCase());
    *!return found || null;}
*! https://github.com/skdhg/emoji-api/blob/main/src/index.ts
*/

function Emoji() {
    const emoji = require("emoji-api");
    const [text,setText] = useState("");
    const [items,setItems] = useState(emoji);
  return (
    <div>   
        <h1>Emoji Search</h1>
        <label >Filter<input value={text} onChange={(e) => setText(e.target.value)} /></label>
        <ul className='list-group'>
                {/* <li className='list-group-item'>{items.Emoji[0]._data.emoji}</li>
                <li className='list-group-item'>{items.Emoji[1]._data.emoji}</li>
                <li className='list-group-item'>{items.Emoji[2]._data.emoji}</li>
                <li className='list-group-item'>{items.Emoji[3]._data.emoji}</li>
                <li className='list-group-item'>{items.Emoji[4]._data.emoji}</li>
                <li className='list-group-item'>{items.Emoji[5]._data.emoji}</li> */}
                console.log(emoji.)
        </ul>

        {
            console.log(emoji.all())
        }
    </div>
  )
}

export default Emoji