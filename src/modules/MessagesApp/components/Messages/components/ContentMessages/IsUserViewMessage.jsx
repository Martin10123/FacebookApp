import { photoUser } from "../../../../../../assets";

import styles from "./cardMessages.module.css";

export const IsUserViewMessage = ({
  infoUserActive,
  isUserActive,
  lastMessageSent,
  message,
  userMessage,
}) => {
  const whatIsTheLastViewMessage = () => {
    const messagesUserActive = lastMessageSent.filter(
      (messagesUser) => messagesUser[1].uid === infoUserActive.uid
    );

    if (messagesUserActive[messagesUserActive.length - 1][1].isView) {
      return messagesUserActive[messagesUserActive.length - 1][0];
    } else {
      return messagesUserActive[messagesUserActive.length - 2][0];
    }
  };

  return (
    <>
      {isUserActive ? (
        <>
          {message.isView ? (
            <>
              {whatIsTheLastViewMessage() === message.idMessage && (
                <img
                  alt="Foto de perfil"
                  src={userMessage.photoUrl || photoUser}
                  className={styles.message__photo_user_little}
                />
              )}
            </>
          ) : (
            <i className="fa-solid fa-circle-check"></i>
          )}
        </>
      ) : (
        <figure className={styles.message__photo_user}>
          <img src={userMessage.photoUrl || photoUser} alt="Foto de perfil" />
          <i className="fa-solid fa-circle"></i>
        </figure>
      )}
    </>
  );
};
