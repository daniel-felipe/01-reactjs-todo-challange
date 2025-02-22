import { PlusCircle } from "@phosphor-icons/react";

import styles from "./NewTaskInput.module.css";

export function NewTaskInput() {
  return (
    <section className={styles.inputWrapper}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </section>
  );
}
