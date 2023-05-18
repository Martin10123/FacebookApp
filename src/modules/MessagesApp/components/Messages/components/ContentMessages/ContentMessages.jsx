import { CardMessages } from "./CardMessages";
import { useContentMessages } from "../../hooks";

import styles from "./cardMessages.module.css";

export const ContentMessages = ({
  imgDesk = false,
  infoUserActive,
  userMessage,
}) => {
  const { messagesSort, combinedUid } = useContentMessages({
    infoUserActive,
    userMessage,
  });

  const isUserInChat = !userMessage?.usersDelete?.includes(infoUserActive.uid);

  return (
    <div className={styles.message__box_messages}>
      {isUserInChat && (
        <>
          {messagesSort.map(([idDoc, message]) => (
            <CardMessages
              combinedUid={combinedUid}
              idMessage={idDoc}
              imgDesk={imgDesk}
              key={idDoc}
              message={message}
              userMessage={userMessage}
              lastMessageSent={messagesSort}
            />
          ))}
        </>
      )}
    </div>
  );
};
