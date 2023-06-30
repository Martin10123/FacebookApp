import { getDateMessage } from "../../../../../../helpers";
import { useCardMessages } from "../../hooks/useCardMessages";
import { IsUserViewMessage } from "./IsUserViewMessage";
import { OptionsMessage } from "./OptionsMessage";

import styles from "./cardMessages.module.css";

export const CardMessages = ({
  combinedUid,
  idMessage,
  imgDesk,
  isWindown,
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
            className={styles.message__open_date_sent_message}
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
                {showUserWriteInGroup?.uid !== infoUserActive.uid && (
                  <p className={styles.message__name_group}>
                    {showUserWriteInGroup?.displayName ||
                      message.nameUserWriteMessage}
                  </p>
                )}
              </>
            )}

            {message.message && (
              <>
                <span className={styles.message__date}>
                  {getDateMessage(message.datecreateMessage)}
                </span>

                <div className={styles[contentInfoMessageIsLeftOrRight]}>
                  <p className={styles[infoMessage]}>{message.message}</p>

                  <i
                    className="fa-solid fa-ellipsis"
                    onClick={() => setOpenOptions(true)}
                  ></i>
                </div>
              </>
            )}

            {message.photoMessage && (
              <>
                <span className={styles.message__date}>
                  {getDateMessage(message.datecreateMessage)}
                </span>

                <figure
                  className={`${styles.message__image} ${
                    styles[imageDesk] || ""
                  }`}
                  style={{ flexDirection: isUserActive ? "row-reverse" : "" }}
                >
                  <img alt="Foto del mensaje" src={message.photoMessage} />

                  <i
                    className="fa-solid fa-ellipsis"
                    onClick={() => setOpenOptions(true)}
                  ></i>
                </figure>
              </>
            )}
          </div>
        </div>
      )}

      {openOptions && (
        <OptionsMessage
          combinedUid={combinedUid}
          infoUserActive={infoUserActive}
          isUserActive={isUserActive}
          isWindown={isWindown}
          message={message}
          setOpenOptions={setOpenOptions}
        />
      )}
    </>
  );
};
