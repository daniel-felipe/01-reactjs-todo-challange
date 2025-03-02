import Header from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { NewTaskInput } from "./components/NewTaskInput";
import { useState } from "react";
import { Task } from "./components/Task";
import { EmptyState } from "./components/EmptyState";

export interface TaskType {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <NewTaskInput setTasks={setTasks} />
        <div>
          <div className={styles.header}>
            <div>
              <span className={styles.createdTitle}>Tarefas criadas</span>
              <span>{tasks.length}</span>
            </div>
            <div>
              <span className={styles.doneTitle}>Concluídas</span>
              <span>0</span>
            </div>
          </div>
          <div className={styles.listWrapper}>
            {tasks.length > 0 ? (
              <>
                {tasks.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
