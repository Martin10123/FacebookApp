import styles from "../infoComponents.module.css";

export const ListOptionsChat = ({ isGroup, onOpenAddFriendOGoProfile }) => {
  return (
    <div className={styles.info__list_options_chat}>
      <div className={styles.info__item_option}>
        <i className="fa-solid fa-phone"></i>
        <span className={styles.info__name_item}>Audio</span>
      </div>
      <div className={styles.info__item_option}>
        <i className="fa-solid fa-video"></i>
        <span className={styles.info__name_item}>Video</span>
      </div>
      <div
        className={styles.info__item_option}
        onClick={onOpenAddFriendOGoProfile}
      >
        <i
          className={isGroup ? "fa-solid fa-user-plus" : "fa-solid fa-user"}
        ></i>
        <span className={styles.info__name_item}>
          {isGroup ? "Agregar" : "Perfil"}
        </span>
      </div>
      <div className={styles.info__item_option}>
        <i className="fa-solid fa-bell"></i>
        <span className={styles.info__name_item}>Silenciar</span>
      </div>
    </div>
  );
};
