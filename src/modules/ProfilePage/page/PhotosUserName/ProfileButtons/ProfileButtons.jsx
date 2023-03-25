import styles from "./profilebuttons.module.css";

export const ProfileButtons = ({
  isUserActive,
  onAddFriends,
  setOpenEditProfile,
}) => {
  return (
    <div
      className={
        isUserActive
          ? styles.profile__buttons_history
          : styles.profile__buttons_history_other
      }
    >
      {isUserActive ? (
        <>
          <button className={styles.profile__add_history}>
            <i className="fa-solid fa-circle-plus"></i>
            Agregar historia
          </button>
          <button
            className={styles.profile__ellipsis}
            onClick={() => setOpenEditProfile(true)}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </>
      ) : (
        <>
          <button className={styles.profile__btn_other}>
            <i className="fa-solid fa-user-plus"></i>
            Agregar
          </button>
          <button className={styles.profile__btn_other}>
            <i className="fa-brands fa-facebook-messenger"></i>
            Mensaje
          </button>
        </>
      )}
    </div>
  );
};
