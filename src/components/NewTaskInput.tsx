import { PlusCircle } from "@phosphor-icons/react";

import { v4 as uuidv4 } from "uuid";
import styles from "./NewTaskInput.module.css";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { TaskType } from "../App";

interface NewTaskInputProps {
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
}

export function NewTaskInput({ setTasks }: NewTaskInputProps) {
  const [task, setTask] = useState("");

  function handleCreateTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!task) {
      return;
    }

    const newTask: TaskType = {
      id: uuidv4(),
      title: task,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask]);
    setTask("");
  }

  return (
    <section className={styles.inputWrapper}>
      <form onSubmit={handleCreateTask}>
        <input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={task}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </section>
  );
}
