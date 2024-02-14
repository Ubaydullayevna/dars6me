import TodoInput from "./TodoInput";
import { v4 as uuidv4 } from "uuid";

function Form({ setTodos, todos }) {
  function handleSubmit(e) {
    const obj = {};
    e.preventDefault();
    const data = new FormData(e.target);
    for (const [key, value] of data.entries()) {
      obj[key] = value;
    }
    obj.completed = false;
    obj.time = new Date().toLocaleString();
    obj.id = uuidv4();
    setTodos((oldTodos) => [...oldTodos, obj]);
    e.target.reset();
  }
  return (
    <form className="pb-8" onSubmit={(e) => handleSubmit(e)}>
      <TodoInput />
    </form>
  );
}

export default Form;
