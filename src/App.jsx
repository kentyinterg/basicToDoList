import React, { useState } from 'react';
import './style.css';
import { InputToDo } from './components/InputToDo';
import { IncompleteToDos } from './components/IncompleteToDos';
import { CompleteToDos } from './components/CompleteToDos';

export const App = () => {
  const [toDoTxt, setToDoTxt] = useState('');
  const [incompleteToDos, setIncompleteToDos] = useState(['あああ', 'いいい']);
  const [completeToDos, setCompleteToDos] = useState(['ううう', 'えええ']);

  const changeToDoTxt = (event) => {
    return setToDoTxt(event.target.value);
  };

  const addToDo = () => {
    if (toDoTxt === '') return;

    const newToDos = [...incompleteToDos, toDoTxt];
    setIncompleteToDos(newToDos);
    setToDoTxt('');
  };

  const deleteToDo = (index) => {
    const newToDos = [...incompleteToDos];
    newToDos.splice(index, 1);
    setIncompleteToDos(newToDos);
  };

  const completeToDo = (index) => {
    const newInCompleteToDos = [...incompleteToDos];
    newInCompleteToDos.splice(index, 1);

    const newCompleteToDos = [...completeToDos, incompleteToDos[index]];
    setIncompleteToDos(newInCompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  const undoToDo = (index) => {
    const newCompleteToDos = [...completeToDos];
    newCompleteToDos.splice(index, 1);

    const newInCompleteToDos = [...incompleteToDos, completeToDos[index]];

    setIncompleteToDos(newInCompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  return (
    <>
      <InputToDo
        toDoTxt={toDoTxt}
        onChange={changeToDoTxt}
        onClick={addToDo}
        disabled={incompleteToDos.length > 4}
      />
      {incompleteToDos.length > 4 && <p>う</p>}

      <IncompleteToDos
        todos={incompleteToDos}
        completeToDo={completeToDo}
        deleteToDo={deleteToDo}
      />

      <CompleteToDos todos={completeToDos} undoToDo={undoToDo} />
    </>
  );
};
