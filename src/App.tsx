import './App.css';
import AddTodo from './components/addTodo/AddTodo';
import Todos from './components/todos/Todos';


function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
