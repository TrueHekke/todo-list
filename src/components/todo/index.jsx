import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleCompleteness, removeTask } from "../../store/slices/todo"

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleCompleteness({ id: todo.id }));
  }

  const handleRemoveTask = () => {
    dispatch(removeTask({ id: todo.id }));
  };

  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
      {todo.completed && (
        <button onClick={handleRemoveTask} className={styles.button}>Remove</button>
      )}
    </li>
  );
};
