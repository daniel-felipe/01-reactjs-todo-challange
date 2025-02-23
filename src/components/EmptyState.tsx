import styles from "./EmptyState.module.css";

export function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <img src="./clipboard.svg" alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
