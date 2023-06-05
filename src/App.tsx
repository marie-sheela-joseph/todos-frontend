import './App.css';
import Home from './components/home/Home';
import Todo from './components/todo/Todo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/todos" component={Home} />
        <Route exact path="/todos/:x" component={Todo} />
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
