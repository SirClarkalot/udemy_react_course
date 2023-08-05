import { useRef, useContext } from "react";
import classes from "./newTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoInputTextRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label} htmlFor="text">
        To do text
      </label>
      <input type="text" id="text" ref={todoInputTextRef}></input>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
