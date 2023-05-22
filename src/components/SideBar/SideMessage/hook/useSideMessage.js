import { useContext, useState } from "react";
import { AuthUserContext, GetUsers_MessagesContext } from "../../../../context";
import { whichBirthdayIsClose } from "../../../../modules/EventsBirthday/helpers/whoBirthdayIsClose";
import { OpenWindownChatContext } from "../context/OpenWindownChat";

export const useSideMessage = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { getUsersMessages } = useContext(GetUsers_MessagesContext);
  const {
    contentChatsUser,
    minWindownChat,
    openMinWindownChat,
    openWindownChat,
    setContentChatsUser,
  } = useContext(OpenWindownChatContext);
  const [openBirthdays, setOpenBirthdays] = useState(false);

  const usersWhoBirthdayIsClose = whichBirthdayIsClose(users);
  const listUserActive = getUsersMessages
    .filter((listUser) => listUser.idDoc === infoUserActive.uid)
    .map(({ idDoc, ...userWithoutId }) => userWithoutId);

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
