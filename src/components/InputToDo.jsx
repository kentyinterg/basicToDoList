import React from 'react';

export const InputToDo = props => {
  const { toDoTxt, onChange, onClick, disabled } = props;

  const style = {
    backgroundColor: '#c1ffff',
    width: '400px',
    height: '30px',
    borderRadius: '8px',
    padding: '8px',
    margin: '8px'
  };

  return (
    <div style={style}>
      <input disabled={disabled} type="text" value={toDoTxt} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};
