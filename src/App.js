import Addtodo from './component/Addtodo'
import TodoList from './component/TodoList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Addtodo />
       <TodoList />
      </header>
    </div>
  );
}

export default App;
