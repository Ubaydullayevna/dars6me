import { useEffect, useState } from "react";
import Form from "./Form";

function MainContent() {
  const [todos, setTodos] = useState([]);

  function handleDelete(id) {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }

  return (
    <main>
      <div className="mx-auto w-full max-w-[740px] px-5">
        <Form setTodos={setTodos} todos={todos} />
        <span className="block pb-6">
          Todos: <strong>{todos.length}</strong>
        </span>
        <ul className="flex flex-col gap-5 pb-5">
          {todos.length > 0 ? (
            todos.map(({ todoName, id, time }) => {
              return (
                <li className="card w-full bg-base-100 shadow-md" key={id}>
                  <div className="card-body">
                    <h2 className="card-title">{todoName}</h2>
                    <button
                      className="btn btn-circle btn-ghost btn-sm absolute right-6 top-4"
                      onClick={() => handleDelete(id)}
                    >
                      ✕
                    </button>
                    <p>
                      Published at: <time dateTime={time}>{time}</time>
                    </p>
                  </div>
                </li>
              );
            })
          ) : (
            <h2 className="text-center text-2xl font-bold">No todo</h2>
          )}
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
