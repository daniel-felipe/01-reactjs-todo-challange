import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <span className={styles.createdTitle}>Tarefas criadas</span>
          <span>0</span>
        </div>
        <div>
          <span className={styles.doneTitle}>Concluídas</span>
          <span>0</span>
        </div>
      </div>

      <div className={styles.listWrapper}>
        <div className={styles.emptyState}>
          <img src="./clipboard.svg" alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  );
}
