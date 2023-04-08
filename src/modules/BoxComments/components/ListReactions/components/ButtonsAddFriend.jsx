import styles from "../listReactions.module.css";

export const ButtonsAddFriend = ({
  isCurrentUserInListFriendsOtherUser,
  isCurrentUserInListReceivedOtherUser,
  isOtherUserInListReceivedCurrentUser,
  isOtherUserInListRequestSent,
  onAddNewFriend,
}) => {
  const renderFriendButton = () => {
    if (isCurrentUserInListFriendsOtherUser) {
      return (
        <button className={styles.list_reactions__btn_add_friend}>
          <i className="fa-solid fa-user-check"></i>
          Amigos
        </button>
      );
    } else if (isOtherUserInListReceivedCurrentUser) {
      const buttonText = !isCurrentUserInListReceivedOtherUser
        ? "Recibida"
        : "Enviada";

      return (
        <button className={styles.list_reactions__btn_add_friend}>
          <i className="fa-solid fa-user-check"></i>
          {buttonText}
        </button>
      );
    } else {
      const buttonColor = isOtherUserInListRequestSent
        ? { background: "#ff0000", color: "#fff" }
        : {};
      const buttonText = isOtherUserInListRequestSent ? "Eliminar" : "Agregar";

      return (
        <button
          className={styles.list_reactions__btn_add_friend}
          onClick={() => onAddNewFriend()}
          style={buttonColor}
        >
          {buttonText}
        </button>
      );
    }
  };

  return <>{renderFriendButton()}</>;
};
