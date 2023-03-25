import styles from "./sharePost.module.css";

export const ShareInItem = () => {
  return (
    <div className={styles.share__share_in}>
      <div className={styles.share__share_in_item}>
        <span className={styles.share__share_logo}>
          <i className="fa-brands fa-facebook-messenger"></i>
        </span>
        <p>Mensaje</p>
      </div>
      <div className={styles.share__share_in_item}>
        <span className={styles.share__share_logo}>
          <i className="fa-brands fa-whatsapp"></i>
        </span>
        <p>WhatsApp</p>
      </div>
      <div className={styles.share__share_in_item}>
        <span className={styles.share__share_logo}>
          <i className="fa-solid fa-users-rays"></i>
        </span>
        <p>Grupo</p>
      </div>
      <div className={styles.share__share_in_item}>
        <span className={styles.share__share_logo}>
          <i className="fa-solid fa-up-right-from-square"></i>
        </span>
        <p>Más</p>
      </div>
    </div>
  );
};
