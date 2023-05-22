import { createContext, useState } from "react";

export const OpenWindownChatContext = createContext();

export const OpenWindownChatProvider = ({ children }) => {
  const [contentChatsUser, setContentChatsUser] = useState([]);
  const [minWindownChat, setMinWindownChat] = useState([]);

  const openWindownChat = (chatUser) => {
    if (contentChatsUser.includes(chatUser)) {
      setContentChatsUser(
        contentChatsUser.filter((uidChat) => uidChat !== chatUser)
      );
    } else {
      let updatedContentChatsUser = [chatUser, ...contentChatsUser];

      if (updatedContentChatsUser.length > 3) {
        updatedContentChatsUser = updatedContentChatsUser.slice(0, 3);
      }

      setContentChatsUser(updatedContentChatsUser);
      setMinWindownChat(
        minWindownChat.filter((uidChat) => uidChat != chatUser)
      );
    }
  };

  const openMinWindownChat = (chatUser) => {
    if (minWindownChat.includes(chatUser)) {
      setMinWindownChat(
        minWindownChat.filter((uidChat) => uidChat != chatUser)
      );

      openWindownChat(chatUser);
    } else {
      if (minWindownChat.length !== 8) {
        setMinWindownChat([...minWindownChat, chatUser]);
      }

      openWindownChat(chatUser);
    }
  };

  const providerState = {
    contentChatsUser,
    minWindownChat,
    openMinWindownChat,
    openWindownChat,
    setContentChatsUser,
    setMinWindownChat,
  };

  return (
    <OpenWindownChatContext.Provider value={providerState}>
      {children}
    </OpenWindownChatContext.Provider>
  );
};
