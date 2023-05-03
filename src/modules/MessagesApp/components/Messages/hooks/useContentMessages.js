import { useContext } from "react";
import { GetUsers_MessagesContext } from "../../../../../context";

export const useContentMessages = ({ infoUserActive, userMessage }) => {
  const { getMessages } = useContext(GetUsers_MessagesContext);

  const combinedUid =
    infoUserActive.uid > userMessage.uid
      ? infoUserActive.uid + userMessage.uid
      : userMessage.uid + infoUserActive.uid;

  const uidGroup = `${userMessage?.createGroup}${userMessage?.idUniqGroup}`;

  const whatMessageIS = userMessage.isGroup ? uidGroup : combinedUid;

  const getMessagesChatSelect =
    getMessages?.find((message) => message.idMessage === whatMessageIS) || [];

  const { idMessage, ...messagesSelect } = getMessagesChatSelect;

  const messagesSort = Object.entries(messagesSelect).sort(
    (a, b) => a[1].datecreateMessage - b[1].datecreateMessage
  );

  return {
    messagesSort,
    combinedUid: whatMessageIS,
  };
};
