import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addTodoAsync} from "../redux/todos/todosSlice"
import Loading from "./Loading"
function Form() {
const [title,setTitle] = useState("");
const isLoading = useSelector((state) => state.todos.addNewTodo.isLoading)
const error = useSelector((state) => state.todos.addNewTodo.error)
const dispatch = useDispatch();
  const handleSubmit= async(e) =>{
    if(!title) return;
    
    e.preventDefault();

    await dispatch(addTodoAsync({title}))
    setTitle("");
  }
  
  return (
    <form onSubmit={handleSubmit} style={{display: "flex", alignItems: "center  "}}>
    <input className='new-todo' disabled={isLoading} placeholder='what needs to be done?' autoFocus  value={title} onChange={(e) => setTitle(e.target.value)}/>
    {
      isLoading && <Loading/>
    }
</form>
  )
}

export default Form