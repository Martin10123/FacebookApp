import { ListReactionsHistory } from "./ListReactionsHistory";

import styles from "./stylesComponents.module.css";

export const SeeReactionsHistories = () => {
  return (
    <div className={styles.see_history__reactions_message_history}>
      <div className={styles.see_history__messages_default}>
        <p>Guau, increíble</p>
        <p>Es hermos@</p>
        <p>Increible paisaje</p>
        <p>Excelente</p>
        <p>❤️❤️❤️</p>
      </div>

      <div className={styles.see_history__show_reactions_history}>
        <ListReactionsHistory />
      </div>
    </div>
  );
};
