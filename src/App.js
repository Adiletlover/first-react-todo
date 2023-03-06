import React, { useState } from 'react';
import './App.css';
import Input from './components/Input.jsx';
import TodoList from './components/TodoList';

const App = () => {
  const [list, setList] = useState([]);

  

  const addTodo = (todo) => {
    const newList = [...list, { ...todo, id: Date.now() }];
    setList(newList);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className="App">
      <Input addTodo={addTodo} />
      <TodoList list={list} deleteTodo={deleteTodo} setList={setList}/>
    </div>
  );
};

export default App;
