import { photoUser, register } from "../../../../assets";

export const useCardWindownChats = ({
  usernameUniq,
  users,
  listUserActive,
  userChat,
  infoUserActive,
}) => {
  const foundUserChat = users.find((user) => usernameUniq === user.username);
  const groupSelect = listUserActive.find((user) => user[0] === usernameUniq);

  const userFound = foundUserChat ? foundUserChat : groupSelect[1].infoUser;

  const photoUOG = userFound.isGroup
    ? userFound.photoGroup || register
    : userFound.photoUrl || photoUser;

  const nameUOG = userFound.isGroup
    ? userFound.nameGroup
    : userFound.displayName;

  const isActiveUOG = userFound.isGroup ? false : userFound.isActive;

  const postText =
    userChat.lastMessage.length >= 30
      ? userChat.lastMessage.substring(0, 30) + "..."
      : userChat.lastMessage;

  const userWriteMessage = userChat?.uidWhoWriteMessage === infoUserActive.uid;
  const isViewOrNot = { fontWeight: userChat?.isView ? "300" : "bold" };
  const idGroupOChat = userFound.isGroup
    ? userFound.idUniqGroup
    : userFound.uid;

  return {
    idGroupOChat,
    isActiveUOG,
    isViewOrNot,
    nameUOG,
    photoUOG,
    postText,
    userWriteMessage,
  };
};
