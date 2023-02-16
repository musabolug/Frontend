import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../redux/note/noteSlice'
import { Button } from '@mui/material';
function NoteList() {
 const dispatch= useDispatch();
 const items = useSelector(state=> state.notes.items);
 const searchText = useSelector(state=> state.notes.search);
 const filtered = items.filter((item) => {
    return Object.keys(item).some((key) =>
    item[key].toString().toLowerCase().includes(searchText.toLowerCase())
    );
});
  return (
    <div className='notes'>
        {
            filtered.map(item =>(
                <div key={item.id} className="writed-note" style={{backgroundColor: `${item.color}`}}>
                    {item.title}
                    {/* <button className='delete-note' onClick={()=> dispatch(deleteNote(item.id))}>Delete</button> */}
                    <Button variant="contained" color='secondary' className='delete-note' onClick={()=> dispatch(deleteNote(item.id))} >delete</Button>

                    <br />
                    <br />
                    <hr />
                    <br />
                    <div>
                        {item.note}
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default NoteList