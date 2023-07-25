import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";


import styles from './index.module.css';

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  const completedTodos = todos.filter(todo => todo.completed);
  const uncompletedTodos = todos.filter(todo => !todo.completed);

  return (
    <div className={styles.main}>
      <div>
        <h2 className={styles.title}>Uncompleted Task</h2>
        <ul className={styles.list}>
          {uncompletedTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul> 
      </div>
      <div>
        <h2 className={styles.title}>Completed Task</h2>
        <ul className={styles.list}>
          {completedTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul> 
      </div>
    </div>
  );
};

