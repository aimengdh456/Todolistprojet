import React, { useState } from 'react';
import TacheForme from './TacheForme';
import Taches from './Taches';

function ListeDesTaches() {
  const [todos, setTodos] = useState([]);

  const ajouterunetache = tache => {
    if (!tache.text || /^\s*$/.test(tache.text)) {
      return;
    }
    const nouvelletache = [tache, ...todos];
    setTodos(nouvelletache);
    console.log(...todos);
  };
  const modifiertache = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const supprimertache = id => {
    const removedArr = [...todos].filter(tache => tache.id !== id);

    setTodos(removedArr);
  };

  const finirtache = id => {
    let updatedTodos = todos.map(tache => {
      if (tache.id === id) {
        tache.isComplete = !tache.isComplete;
      }
      return tache;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Qulles sont vos taches d'aujourdhui ? </h1>
      <TacheForme onSubmit={ajouterunetache} />
      <Taches
        todos={todos}
        finirtache={finirtache}
        supprimertache={supprimertache}
        modifiertache={modifiertache}
      />
    </>
  );
}

export default ListeDesTaches;