import React, { useState } from 'react';
import './AddTodoForm.css';

export const AddTodoForm = ({ handleSubmit }) => {
  const [values, setValues] = useState({});

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));
  };
  const { newTodoText } = values;

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (!newTodoText) {
      return;
    } else {
      handleSubmit(newTodoText);
      setValues({});
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmitForm}>
      <input
        className="form-control add-input"
        onChange={handleInputChange}
        type="text"
        id="add-todo"
        name="newTodoText"
        placeholder="Add a new TODO here..."
        value={newTodoText || ''}
      />
      <button
        className="btn btn-outline-success btn-sm float-right"
        type="submit"
        id="addSubmit"
        name="addSubmit"
        disabled={!newTodoText}
      >
        Add TODO
      </button>
    </form>
  );
};
