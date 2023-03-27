import styles from "./profilebuttons.module.css";

export const ButtonsFloatOptions = ({
  isCurrentUserInListFriendsOtherUser,
  matchedUser,
  onAcceptRequestOfFriend,
  onDeleteSomebodyFriendsList,
  onRechacedRequestOfFriend,
  refButtons,
}) => {
  if (!matchedUser) {
    return null;
  }

  const { uid, displayName } = matchedUser;

  return (
    <div
      className={styles.profile__show_btns_add_delete_request}
      ref={refButtons}
    >
      {isCurrentUserInListFriendsOtherUser ? (
        <>
          <button
            className={styles.profile__btn_other_delete_friend}
            onClick={() =>
              onDeleteSomebodyFriendsList({ uidOtherUser: uid, displayName })
            }
          >
            <i className="fa-solid fa-user-xmark"></i>
            Eliminar de mis amigos
          </button>
        </>
      ) : (
        <>
          <button
            className={styles.profile__btn_other_accept}
            onClick={() =>
              onAcceptRequestOfFriend({ uidOtherUser: uid, displayName })
            }
          >
            Confirmar solicitud
          </button>
          <button
            className={styles.profile__btn_other_recha}
            onClick={() =>
              onRechacedRequestOfFriend({ uidOtherUser: uid, displayName })
            }
          >
            Eliminar solicitud
          </button>
        </>
      )}
    </div>
  );
};
