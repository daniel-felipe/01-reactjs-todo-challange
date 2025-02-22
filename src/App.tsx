import Header from './components/Header';

import styles from './App.module.css';

import './global.css'
import { PlusCircle } from '@phosphor-icons/react';

export function App() {

  return (
    <main className={styles.wrapper}>
      <Header />
      <section>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
      </section>
    </main>
  )
}
