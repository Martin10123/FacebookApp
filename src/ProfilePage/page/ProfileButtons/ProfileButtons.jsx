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

const renderFriendButton = () => {
  if (isFriendAccept) {
    return (
      <button className={styles.profile__button1}>
        <span>Amigos</span>
      </button>
    );
  }
  if (isPendingReceivedOther) {
    return (
      <button className={styles.profile__button1}>
        <HiUserAdd />
        <span>{!isPendingReceived && "Ya te envio la solicitud"}</span>
      </button>
    );
  }
  return (
    <button className={styles.profile__button1}>
      <HiUserAdd />
      <span>{isPendingSent ? "Eliminar solicitud" : "Agregar"}</span>
    </button>
  );
};
