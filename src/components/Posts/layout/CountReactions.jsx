import styles from "./layout.module.css";

export const CountReactions = () => {
  return (
    <div className={styles.layout__content_reactions_comments_share}>
      <p>851</p>
      <span>
        <p>300 comentarios</p>
        <p>20 compartidas</p>
      </span>
    </div>
  );
};
