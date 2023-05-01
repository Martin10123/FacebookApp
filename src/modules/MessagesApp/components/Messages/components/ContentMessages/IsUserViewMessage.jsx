import { photoUser } from "../../../../../../assets";

import styles from "./cardMessages.module.css";

const whatIsTheLastViewMessage = ({ lastMessageSent, infoUserActive }) => {
  const messagesUserActive = lastMessageSent.filter(
    (messagesUser) => messagesUser[1].uid === infoUserActive.uid
  );

  if (messagesUserActive[messagesUserActive.length - 1][1].isView) {
    return messagesUserActive[messagesUserActive.length - 1][0];
  } else {
    return messagesUserActive[messagesUserActive.length - 2][0];
  }
};

export const IsUserViewMessage = ({
  infoUserActive,
  isUserActive,
  lastMessageSent,
  message,
  showUserWriteInGroup,
  userMessage,
}) => {
  const showPhotoUrl = userMessage.isGroup
    ? showUserWriteInGroup?.photoUrl
    : userMessage.photoUrl;

  const idLastMessage = whatIsTheLastViewMessage({
    infoUserActive,
    lastMessageSent,
  });

  const isActiveUser = userMessage.isGroup
    ? showUserWriteInGroup?.isActive
    : userMessage.isActive;

  return (
    <>
      {isUserActive ? (
        !userMessage?.isGroup && (
          <>
            <ShowPhotoUserLastMessage
              idLastMessage={idLastMessage}
              message={message}
              showPhotoUrl={showPhotoUrl}
            />
          </>
        )
      ) : (
        <figure className={styles.message__photo_user}>
          <img src={showPhotoUrl || photoUser} alt="Foto de perfil" />
          {isActiveUser && <i className="fa-solid fa-circle"></i>}
        </figure>
      )}
    </>
  );
};

const ShowPhotoUserLastMessage = ({ message, idLastMessage, showPhotoUrl }) => {
  // idLastMessage === message.idMessage: esta condición nos ayuda a poner la foto de perfil del usuario
  // en el ultimo mensaje que envio

  return (
    <>
      {message.isView ? (
        <>
          {idLastMessage === message.idMessage && (
            <img
              alt="Foto de perfil"
              src={showPhotoUrl || photoUser}
              className={styles.message__photo_user_little}
            />
          )}
        </>
      ) : (
        <i className="fa-solid fa-circle-check"></i>
      )}
    </>
  );
};
