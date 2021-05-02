import React, { useCallback, useState } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { TodoList } from '../TodoList/TodoList';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { initialTodos } from '../../mocks/initialTodos';
import './App.css';

export const App = () => {
  const [todoData, setTodoData] = useState(initialTodos);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filterMode, setFilterMode] = useState('all');

  const done = todoData.filter((todo) => todo.isDone).length;
  const toDo = todoData.filter((todo) => !todo.isDone).length;

  const toggleIsDoneStateOnSelectedTodo = useCallback(
    (selectedTodoId) => {
      const newData = todoData.map((todo) => {
        if (todo.id === selectedTodoId) {
          todo.isDone = !todo.isDone;
          return todo;
        } else return todo;
      });
      setTodoData(newData);
    },
    [todoData],
  );

  const toggleIsImportantStateOnSelectedTodo = useCallback(
    (selectedTodoId) => {
      const newData = todoData.map((todo) => {
        return todo.id === selectedTodoId ? { ...todo, isImportant: !todo.isImportant } : todo;
      });
      setTodoData(newData);
    },
    [todoData],
  );
  const deleteTodo = useCallback(
    (deletedTodoId) => {
      setTodoData(todoData.filter((todo) => todo.id !== deletedTodoId));
    },
    [todoData],
  );

  const handleSubmitAddTodoForm = useCallback(
    (newTodoText) => {
      const newTodo = {
        todoText: newTodoText,
        isImportant: false,
        isDone: false,
        id: Math.round(Math.random() * 10 ** 10).toString(),
      };
      setTodoData([...todoData, newTodo]);
    },
    [todoData],
  );

  const handleSearchInputChange = useCallback((searchInputValue) => {
    setSearchPhrase(searchInputValue);
  }, []);

  const searchTodo = (todosList, searchText) => {
    if (!searchPhrase) {
      return todosList;
    } else {
      return todosList.filter(({ todoText }) =>
        todoText.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
  };

  const filterTodos = (todosList, filterMode) => {
    switch (filterMode) {
      case 'all':
        return todosList;
      case 'active':
        return todosList.filter(({ isDone }) => !isDone);
      case 'done':
        return todosList.filter(({ isDone }) => isDone);
      default:
        return todosList;
    }
  };

  const visibleTodos = filterTodos(searchTodo(todoData, searchPhrase), filterMode);

  return (
    <>
      <AppHeader toDo={toDo} done={done} />
      <div className="search-panel">
        <SearchPanel handleSearchInputChange={handleSearchInputChange} />
        <ItemStatusFilter filterMode={filterMode} setFilterMode={setFilterMode} />
      </div>
      <AddTodoForm handleSubmit={handleSubmitAddTodoForm} />
      <TodoList
        todos={visibleTodos}
        deleteTodo={deleteTodo}
        handleChangeIsDoneState={toggleIsDoneStateOnSelectedTodo}
        handleChangeIsImportantState={toggleIsImportantStateOnSelectedTodo}
      />
    </>
  );
};
