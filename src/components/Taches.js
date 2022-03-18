import React, { useState } from 'react';
import TacheForme from './TacheForme';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Taches = ({ todos, finirtache, supprimertache, modifiertache }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
 const submitUpdate = value => {
    modifiertache(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };
  if (edit.id) {
    return <TacheForme edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => finirtache(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => supprimertache(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};
export default Taches;