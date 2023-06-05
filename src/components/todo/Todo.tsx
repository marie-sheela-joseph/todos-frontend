import { useEffect } from "react"
import { getTodo ,resetCurrentTodo} from "src/store/slices/todos/todosSlice"
import { useAppDispatch } from "src/store/hooks"
import { useAppSelector } from "src/store/hooks"


const Todo=(props:any)=>{    
    const dispatch=useAppDispatch()
    const currentTodo=useAppSelector((state)=>state.todos.currentTodo)
    useEffect(()=>{
        console.log(props.match.params.x)
        dispatch(getTodo(String(props.match.params.x)))
        console.log(currentTodo)
        return ()=>{
            dispatch(resetCurrentTodo())
        }
    },[props.match.params.x])
    return (
        <div>                
        <p><span>id</span> {currentTodo._id}</p>
        <p><span>assignedTo</span> {currentTodo.assignedTo}</p>
        <p><span>completed</span> {String(currentTodo.completed)}</p>
        <p><span>createdAt</span> {String(currentTodo.createdAt)}</p>
        <p><span>title</span> {currentTodo.title}</p>
        <p><span>dueDate</span> {String(currentTodo.moreDetails.dueDate)}</p>
        <p><span>priority</span> {currentTodo.moreDetails.priority}</p>
        </div>
    )
}
export default Todo
