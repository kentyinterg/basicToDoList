import React from 'react';

export const CompleteToDos = (props) => {
  const {todos, undoToDo} = props
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => undoToDo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
