import { ReactionsPost } from "./ReactionsPost";

import styles from "./layout.module.css";

export const ButtonsReactions = () => {
  return (
    <div className={styles.layout__buttons_reactions}>
      <button className={styles.layout__button_like}>
        <i className="fa-regular fa-thumbs-up"></i>
        Like
        <ReactionsPost />
      </button>
      <button className={styles.layout__button}>
        <i className="fa-regular fa-comment"></i>
        Comentar
      </button>
      <button className={styles.layout__button}>
        <i className="fa-regular fa-share-from-square"></i>
        Compartir
      </button>
    </div>
  );
};
