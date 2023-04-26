import { useContext } from "react";
import { GetUsers_MessagesContext } from "../../../../../context";
import { CardMessages } from "./CardMessages";

export const ContentMessages = ({
  imgDesk = false,
  infoUserActive,
  userMessage,
}) => {
  const { getMessages } = useContext(GetUsers_MessagesContext);

  const combinedUid =
    infoUserActive.uid > userMessage.uid
      ? infoUserActive.uid + userMessage.uid
      : userMessage.uid + infoUserActive.uid;

  const getMessagesChatSelect = getMessages.find(
    (message) => message.idMessage === combinedUid
  );

  const { idMessage, ...messagesSelect } = getMessagesChatSelect;

  const messagesSort = Object.entries(messagesSelect).sort(
    (a, b) => a[1].datecreateMessage - b[1].datecreateMessage
  );

  return (
    <>
      {messagesSort.map(([idDoc, message]) => (
        <CardMessages
          combinedUid={combinedUid}
          idMessage={idDoc}
          imgDesk={imgDesk}
          infoUserActive={infoUserActive}
          key={idDoc}
          message={message}
          userMessage={userMessage}
          lastMessageSent={messagesSort}
        />
      ))}
    </>
  );
};
