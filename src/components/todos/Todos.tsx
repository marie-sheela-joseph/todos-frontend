import { useEffect } from "react"
import { useAppDispatch } from "src/store/hooks"
import { deleteTodo, getTodos,patchTodo } from "src/store/slices/todos/todosSlice"
import { useAppSelector } from "src/store/hooks"
import styles from './styles.module.css'

const Todos = () => {
  const dispatch=useAppDispatch()
  const todos=useAppSelector((state)=>state.todos)
  useEffect(()=>{
    dispatch(getTodos())
  },[])
  const updateTodoData={ 
    "_id":"6479a57d6275ea6bc466b4d7",
    "title":"todo3",
    "assignedTo":["marie","sheela"],
    "completed":true,
    "moreDetails":{
        "priority":5,
        "dueDate":"2023-10-31T09:00:00.594Z"
    }
  }
  return (
    <div className={styles.todos}>
      <h1>{todos.todos.length} Todos</h1>
      <p><span>ID==========</span>
      <span>ASSIGNED TO========= </span>
      <span>COMPLETED   ========== </span>
      <span>CREATED AT ===   </span>
      </p>
      <ul>
        {todos.todos.map((todo)=><li key={todo._id}>
          <div className={styles.todos__card}>
            <p>{todo._id}</p>
            <p>{todo.assignedTo}</p>
            <p>{String(todo.completed)}</p>
            <p>{String(todo.createdAt)}</p>
            <button onClick={()=>{dispatch(deleteTodo(todo._id))}}>delete</button>
            <button onClick={()=>dispatch(patchTodo(updateTodoData))}>update</button>
          </div>                  
        </li>)}
      </ul>
    </div>
  )
}
export default Todos
