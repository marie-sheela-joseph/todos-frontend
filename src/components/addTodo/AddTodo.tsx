import { useAppDispatch } from "src/store/hooks"
import { postTodos } from "src/store/slices/todos/todosSlice"

const AddTodo = () => {
    const dispatch=useAppDispatch()
  return (
    <div>AddTodo
        <button onClick={()=>dispatch(postTodos(
            { 
                "title":"todo2",
                "completed":false,
                "assignedTo":["mary","sila"],
                "moreDetails":{
                    "priority":3,
                    "dueDate":new Date('1995-12-17T03:24:00')
                }
            })
        )}>+</button>
    </div>
  )
}
export default AddTodo
