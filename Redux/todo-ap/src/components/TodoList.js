import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredTodos } from "../redux/todos/todosSlice";
import {  getTodosAsync,toggleTodoAsync,removeTodoAsync} from "../redux/todos/services";
import Loading from "./Loading";
import Error from "./Error";
// let filtered = [];
function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos =useSelector( selectFilteredTodos)
  const isLoading = useSelector((state) => state.todos.isLoading)
  const error = useSelector((state)=> state.todos.error)
  // const items = useSelector(selectTodos);
  // const activeFilter = useSelector((state) => state.todos.activeFilter);
  useEffect(()=>{
    dispatch(getTodosAsync())
  },[dispatch])
  const handleDestroy = async (id) => {
    if (window.confirm("Are you sure?")) {
    await  dispatch(removeTodoAsync(id));
    }
  };
  const handleToggle = async(id,completed) =>{
await dispatch(toggleTodoAsync({id, data:{completed}}))
  }
  if(isLoading){
    return <Loading/>
  }
  if(error){
    return <Error message={error}/>
  }
  //! Yorum satırında olan satırlar todosSlice dosyasında selectFilteredTodos fonksiyonunda 
  //! algoritmalaştırıldı o yuzden burada kullanıma gerek kalmadı

  // filtered = items;
  // if (activeFilter !== "all") {
  //   filtered = items.filter((todo) =>
  //     activeFilter === "active"
  //       ? todo.completed === false && todo
  //       : todo.completed === true && todo
  //   );
  // }
  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle( item.id ,!item.completed)}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
