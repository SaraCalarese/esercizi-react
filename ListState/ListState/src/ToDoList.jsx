import React, { useState } from "react";

function TodoList() {
  // State per la lista dei todo e il valore dell'input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Funzione per aggiungere un nuovo todo alla lista
  const addTodo = () => {
    if (inputValue.trim() === "") return; // Non aggiungere se l'input è vuoto
    setTodos([...todos, inputValue]);
    setInputValue(""); // Svuota l'input dopo aver aggiunto
  };

  // Funzione per rimuovere un todo dalla lista
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  // Funzione per resettare la lista dei todo
  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input e bottone per aggiungere un nuovo todo */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Aggiungi un todo"
      />
      <button onClick={addTodo}>Aggiungi Todo</button>

      {/* Bottone per resettare la lista dei todo */}
      <button onClick={resetTodos}>Reset Lista</button>

      {/* Lista dei todo */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
