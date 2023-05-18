import styles from "../infoComponents.module.css";

export const ListOptionsChat = ({
  isGroup,
  isUserWhoCreateGroup,
  onOpenAddFriendOGoProfile,
}) => {
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

      {isGroup ? (
        isUserWhoCreateGroup && (
          <div
            className={styles.info__item_option}
            onClick={onOpenAddFriendOGoProfile}
          >
            <i className="fa-solid fa-user-plus"></i>
            <span className={styles.info__name_item}>Agregar</span>
          </div>
        )
      ) : (
        <div
          className={styles.info__item_option}
          onClick={onOpenAddFriendOGoProfile}
        >
          <i className="fa-solid fa-user"></i>
          <span className={styles.info__name_item}>Perfil</span>
        </div>
      )}
      <div className={styles.info__item_option}>
        <i className="fa-solid fa-bell"></i>
        <span className={styles.info__name_item}>Silenciar</span>
      </div>
    </div>
  );
};
