import { reactionsDataPost } from "../../../../../components/Posts/helpers";

import styles from "./stylesComponents.module.css";

export const ListReactionsHistory = () => {
  return (
    <div className={styles.see_history__comment_reaction}>
      <div className={styles.see_history__message}>
        <i className="fa-brands fa-facebook-messenger"></i>
        <p>Enviar mensaje...</p>
      </div>

      <div className={styles.see_history__list_emojis}>
        {reactionsDataPost.map((reaction) => (
          <img
            alt={reaction.name}
            className={styles.see_history__reaction_emoji}
            key={reaction.name}
            src={reaction.img}
          />
        ))}
      </div>
    </div>
  );
};
