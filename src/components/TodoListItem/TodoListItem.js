import React from 'react';
import cn from 'classnames';
import './TodoListItem.css';

export const TodoListItem = ({
  todoText,
  isDone,
  isImportant,
  handleDeleteButtonClick,
  handleChangeIsDoneState,
  handleChangeIsImportantState,
}) => {
  const todoItemClass = cn('todo-list-item', {
    done: isDone,
    important: isImportant,
  });

  return (
    <span className={todoItemClass}>
      <span onClick={handleChangeIsDoneState} className="todo-list-item-text">
        {todoText}
      </span>

      <button
        onClick={handleChangeIsImportantState}
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        onClick={handleDeleteButtonClick}
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
