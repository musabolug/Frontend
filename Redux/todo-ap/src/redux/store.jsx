import{configureStore} from "@reduxjs/toolkit"
import  todoSlice  from "./todos/todosSlice"
export const store = configureStore({
    reducer: {
        todos: todoSlice
      },
}) ; 