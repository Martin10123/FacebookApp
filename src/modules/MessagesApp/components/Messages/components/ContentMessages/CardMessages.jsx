import { getDateMessage } from "../../../../../../helpers";
import { useCardMessages } from "../../hooks/useCardMessages";
import { IsUserViewMessage } from "./IsUserViewMessage";
import { OptionsMessage } from "./OptionsMessage";

import styles from "./cardMessages.module.css";

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
    deleteForMyIncludesUserActive,
    isUserActive,
    openOptions,
    ref,

    // Styles
    contentInfoMessageIsLeftOrRight,
    imageDesk,
    infoMessage,
    messageIsLeftOrRight,
    setOpenOptions,
  } = useCardMessages({
    combinedUid,
    idMessage,
    imgDesk,
    infoUserActive,
    message,
  });

  return (
    <>
      {!deleteForMyIncludesUserActive && (
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
                (message.message && message.photoMessage) ||
                message.photoMessage
                  ? "fit-content"
                  : "100%",
            }}
          >
            {message.message && (
              <div className={styles[contentInfoMessageIsLeftOrRight]}>
                <p
                  className={styles[infoMessage]}
                  onClick={() => setOpenOptions(true)}
                >
                  {message.message}
                </p>
                <span
                  className={
                    isUserActive
                      ? styles.message__date_user_active
                      : styles.message__date
                  }
                >
                  {getDateMessage(message.datecreateMessage)}
                </span>
              </div>
            )}

            {message.photoMessage && (
              <figure
                className={`${styles.message__image} ${
                  styles[imageDesk] || ""
                }`}
                style={{ flexDirection: isUserActive ? "row-reverse" : "" }}
              >
                <img
                  alt="Foto del mensaje"
                  onClick={() => setOpenOptions(true)}
                  src={message.photoMessage}
                />
                <span
                  className={
                    isUserActive
                      ? styles.message__date_user_active
                      : styles.message__date
                  }
                >
                  {getDateMessage(message.datecreateMessage)}
                </span>
              </figure>
            )}

            {openOptions && (
              <OptionsMessage
                combinedUid={combinedUid}
                infoUserActive={infoUserActive}
                isUserActive={isUserActive}
                message={message}
                setOpenOptions={setOpenOptions}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
