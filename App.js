import React, { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);  

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onAdd = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, done: false }]);
    setInput('');
  };


  const onToggle = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const onRemove = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  

  return (
    <div>
      <h2>todo-list</h2>

      <input
        value={input}
        onChange={onChange}
        placeholder="해야할 일"
      />
      <button onClick={onAdd}>추가</button>

      <ul>
        {todos.map((todo, index) => (
          <li
          key={index}
          onClick={() => onToggle(index)}
          style={{
            cursor: 'pointer',
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? 'gray' : 'black'
          }}
        >
          {todo.text}
          &nbsp;
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              onRemove(index);
            }}
          >
            삭제
          </button>
        </li>
        
        ))}
      </ul>
    </div>
  );
  
}

export default App;
