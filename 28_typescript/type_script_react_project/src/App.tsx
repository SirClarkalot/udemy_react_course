import Todos from "./components/Todos";
import NewTodo from "./components/newTodo";

import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <div>
      <TodosContextProvider>
        <NewTodo></NewTodo>
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
