import { useContext, useState } from "react";
import { AuthUserContext, GetUsers_MessagesContext } from "../../../../context";
import { whichBirthdayIsClose } from "../../../../modules/EventsBirthday/helpers/whoBirthdayIsClose";

export const useSideMessage = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { getUsersMessages } = useContext(GetUsers_MessagesContext);
  const [openBirthdays, setOpenBirthdays] = useState(false);
  const [contentChatsUser, setContentChatsUser] = useState([]);
  const [minWindownChat, setMinWindownChat] = useState([]);

  const usersWhoBirthdayIsClose = whichBirthdayIsClose(users);
  const listUserActive = getUsersMessages
    .filter((listUser) => listUser.idDoc === infoUserActive.uid)
    .map(({ idDoc, ...userWithoutId }) => userWithoutId);

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

  return {
    // Atributos
    contentChatsUser,
    getUsersMessages,
    infoUserActive,
    listUserActive,
    minWindownChat,
    openBirthdays,
    users,
    usersWhoBirthdayIsClose,

    // Metodos
    openMinWindownChat,
    openWindownChat,
    setContentChatsUser,
    setOpenBirthdays,
  };
};
