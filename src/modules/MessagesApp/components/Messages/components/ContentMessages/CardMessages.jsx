import { getDateMessage } from "../../../../../../helpers";
import { useCardMessages } from "../../hooks/useCardMessages";
import { IsUserViewMessage } from "./IsUserViewMessage";
import { OptionsMessage } from "./OptionsMessage";

import styles from "./cardMessages.module.css";

export const CardMessages = ({
  combinedUid,
  idMessage,
  imgDesk,
  lastMessageSent,
  message,
  userMessage,
}) => {
  const {
    deleteForMyIncludesUserActive,
    infoUserActive,
    isUserActive,
    openOptions,
    ref,
    showUserWriteInGroup,

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
    message,
    userMessage,
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
            showUserWriteInGroup={showUserWriteInGroup}
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
            {userMessage?.isGroup && (
              <>
                {showUserWriteInGroup.uid !== infoUserActive.uid && (
                  <p className={styles.message__name_group}>
                    {showUserWriteInGroup.displayName}
                  </p>
                )}
              </>
            )}

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
