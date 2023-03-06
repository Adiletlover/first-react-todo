import React, { useState } from 'react';

const IsEditTo = ({ isEdit, setIsEdit, todo, list, setList }) => {
  const [state, setState] = useState('');
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const editTodo = (todo) => {
    const editTask = list.map((item) => {
      if (item.id === todo.id) {
        return todo;
      } else {
        return item;
      }
    });

    setList(editTask);
  };

  if (isEdit) {
    return (
      <form>
        <input type="text" placeholder="edit" onChange={handleChange} value={state} />
        <button onClick={() => setIsEdit(false)}>save</button>
      </form>
    );
  } else {
    return <h1 onClick={() => setIsEdit(true)}>state: {state}</h1>;
  }
};

const TodoList = ({ list, deleteTodo, setList }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {list.map((todo) => (
        <div key={todo.id}>
          <IsEditTo
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            todo={todo}
            list={list}
            setList={setList}
          />
          <p>Ref: {todo.desc}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
