import { Check, Trash } from "@phosphor-icons/react";
import { TaskType } from "../App";

import styles from "./Task.module.css";

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  const checkboxClass = task.isCompleted
    ? styles.checkboxChecked
    : styles.checkboxUnchecked;

  return (
    <div className={styles.task}>
      <div>
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
        <button type="button">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
