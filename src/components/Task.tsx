import { Check, Trash } from "@phosphor-icons/react";
import { TaskType } from "../App";

import styles from "./Task.module.css";
import { Dispatch, SetStateAction } from "react";

interface TaskProps {
  task: TaskType;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
}

export function Task({ task, setTasks }: TaskProps) {
  const checkboxClass = task.isCompleted
    ? styles.checkboxChecked
    : styles.checkboxUnchecked;

  function handleDeleteTask() {
    setTasks((state) => state.filter((t) => t.id !== task.id));
  }

  function handleCompleteTask() {
    setTasks((state) => {
      return state.map((t) => {
        if (t.id !== task.id) {
          return t;
        }

        return { ...task, isCompleted: !task.isCompleted };
      });
    });
  }

  return (
    <div className={styles.task}>
      <div onClick={handleCompleteTask}>
        <label htmlFor="checkbox">
          <input type="checkbox" readOnly />
          <div className={`${styles.checkbox} ${checkboxClass}`}>
            {task.isCompleted && <Check size={10} weight="bold" />}
          </div>
          <p className={`${task.isCompleted && styles.titleChecked}`}>
            {task.title}
          </p>
        </label>
      </div>
      <div>
        <button onClick={handleDeleteTask} type="button">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
