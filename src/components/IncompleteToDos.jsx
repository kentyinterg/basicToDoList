import React from 'react';

export const IncompleteToDos = (props) => {
  const { todos, completeToDo, deleteToDo } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => completeToDo(index)}>完了</button>
              <button onClick={() => deleteToDo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
