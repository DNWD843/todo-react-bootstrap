import React from 'react';
import './AppHeader.css';

export const AppHeader = ({ toDo, done }) => {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};
