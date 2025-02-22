import Header from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { NewTaskInput } from "./components/NewTaskInput";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <NewTaskInput />
        <TaskList />
      </section>
    </main>
  );
}
