import React, {useEffect, useState } from "react"
import { useAppDispatch } from "src/store/hooks"
import { deleteTodo, getTodos,patchTodo } from "src/store/slices/todos/todosSlice"
import { useAppSelector } from "src/store/hooks"
import styles from './styles.module.css'
import { Link } from "react-router-dom"

const Todos :React.FunctionComponent= ()=> {
  const dispatch=useAppDispatch()
  const [updateId,setUpdateId]=useState('')
  const todos=useAppSelector((state)=>state.todos.todos)
  useEffect(()=>{
    dispatch(getTodos())
  },[])
  const updateTodoData={ 
    "_id":updateId,
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
      <h1>{todos.length} Todos</h1>
      <input type="text" value={updateId} onChange={(e)=>setUpdateId(e.target.value)}/>
      <button onClick={()=>dispatch(patchTodo(updateTodoData))}>update</button>
      <p><span>ID==========</span>
      <span>ASSIGNED TO========= </span>
      <span>COMPLETED   ========== </span>
      <span>CREATED AT ===   </span>
      </p>
      <ul>
        {todos.map((todo)=><li key={todo._id}>
          <div className={styles.todos__card}>
            <p>{todo._id}</p>
            <p>{todo.title}</p>            
            <button onClick={()=>{dispatch(deleteTodo(todo._id))}}>delete</button>     
            <Link to={`/todos/${todo._id}`}>view</Link>       
          </div>                  
        </li>)}
      </ul>
    </div>
  )
}
export default Todos
