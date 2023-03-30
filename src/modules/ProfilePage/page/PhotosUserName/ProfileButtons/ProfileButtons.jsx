import { useAddNewFriends } from "../../../hook";
import { ButtonsFloatOptions } from "./ButtonsFloatOptions";

import styles from "./profilebuttons.module.css";

export const ProfileButtons = ({
  isUserActive,
  matchedUser,
  setOpenEditProfile,
}) => {
  const {
    // atributos
    isCurrentUserInListFriendsOtherUser,
    isCurrentUserInListReceivedOtherUser,
    isOtherUserInListReceivedCurrentUser,
    isOtherUserInListRequestSent,
    openResponseRequest,
    refButtons,

    // metodos
    onAcceptRequestOfFriend,
    onAddNewFriend,
    onDeleteSomebodyFriendsList,
    onRechacedRequestOfFriend,
    setOpenResponseRequest,
  } = useAddNewFriends({
    matchedUser,
  });

  return (
    <div
      className={
        isUserActive
          ? styles.profile__buttons_history
          : styles.profile__buttons_history_other
      }
    >
      {isUserActive && (
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
      )}

      {!isUserActive && (
        <>
          {isCurrentUserInListFriendsOtherUser ? (
            <button
              className={styles.profile__btn_other_ok}
              onClick={() => setOpenResponseRequest(true)}
            >
              <i className="fa-solid fa-user-check"></i>
              Amigos
            </button>
          ) : (
            <>
              {isOtherUserInListReceivedCurrentUser ? (
                <>
                  <button
                    className={styles.profile__btn_other_sent}
                    onClick={() => setOpenResponseRequest(true)}
                  >
                    <i className="fa-solid fa-user-check"></i>
                    {!isCurrentUserInListReceivedOtherUser && "Responder"}
                  </button>
                </>
              ) : (
                <button
                  className={styles.profile__btn_other_add}
                  onClick={() => onAddNewFriend(matchedUser.displayName)}
                  style={{
                    background: !isOtherUserInListRequestSent ? "" : "#ff0000",
                  }}
                >
                  {!isOtherUserInListRequestSent
                    ? "Agregar"
                    : "Eliminar solicitud"}
                </button>
              )}
            </>
          )}

          {openResponseRequest && (
            <ButtonsFloatOptions
              matchedUser={matchedUser}
              onAcceptRequestOfFriend={onAcceptRequestOfFriend}
              onRechacedRequestOfFriend={onRechacedRequestOfFriend}
              refButtons={refButtons}
              isCurrentUserInListFriendsOtherUser={
                isCurrentUserInListFriendsOtherUser
              }
              onDeleteSomebodyFriendsList={onDeleteSomebodyFriendsList}
            />
          )}

          <button className={styles.profile__btn_other}>
            <i className="fa-brands fa-facebook-messenger"></i>
            Mensaje
          </button>
        </>
      )}
    </div>
  );
};
