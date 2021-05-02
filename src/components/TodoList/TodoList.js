import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.css';

export const TodoList = ({
  todos,
  deleteTodo,
  handleChangeIsDoneState,
  handleChangeIsImportantState,
}) => {
  const listItems = todos.map(({ id, ...todo }) => (
    <li key={id} className="list-group-item">
      <TodoListItem
        {...todo}
        handleDeleteButtonClick={() => {
          deleteTodo(id);
        }}
        handleChangeIsDoneState={() => {
          handleChangeIsDoneState(id);
        }}
        handleChangeIsImportantState={() => {
          handleChangeIsImportantState(id);
        }}
      />
    </li>
  ));

  return <ul className="list-group todo-list">{listItems}</ul>;
};
