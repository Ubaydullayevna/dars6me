function TodoInput() {
  function handleInput({ value }) {
    const inputValue = value.trim();
    return inputValue;
  }
  return (
    <input
      className="input input-bordered w-full max-w-full text-lg"
      onInput={({ target }) => handleInput(target)}
      type="text"
      placeholder="Add new todo"
      autoComplete="off"
      name="todoName"
      required
    />
  );
}

export default TodoInput;
