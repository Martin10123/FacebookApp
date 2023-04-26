import { photoUser } from "../../../../../assets";
import { useCardMessages } from "../hooks/useCardMessages";

import styles from "./componentsStyles.module.css";

export const CardMessages = ({
  combinedUid,
  idMessage,
  imgDesk,
  infoUserActive,
  lastMessageSent,
  message,
  userMessage,
}) => {
  const {
    ref,
    isUserActive,

    // Styles
    contentInfoMessageIsLeftOrRight,
    imageDesk,
    infoMessage,
    messageIsLeftOrRight,
  } = useCardMessages({
    combinedUid,
    idMessage,
    imgDesk,
    infoUserActive,
    message,
  });

  return (
    <>
      <div className={styles[messageIsLeftOrRight]} ref={ref}>
        <IsUserViewMessage
          infoUserActive={infoUserActive}
          isUserActive={isUserActive}
          lastMessageSent={lastMessageSent}
          message={message}
          userMessage={userMessage}
        />

        <div
          style={{
            width:
              (message.message && message.photoMessage) || message.photoMessage
                ? "fit-content"
                : "100%",
          }}
        >
          {message.message && (
            <div className={styles[contentInfoMessageIsLeftOrRight]}>
              <p className={styles[infoMessage]}>{message.message}</p>
            </div>
          )}

          {message.photoMessage && (
            <figure className={`${styles.message__image} ${styles[imageDesk]}`}>
              <img src={message.photoMessage} alt="" />
            </figure>
          )}
        </div>
      </div>
    </>
  );
};

const IsUserViewMessage = ({
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
