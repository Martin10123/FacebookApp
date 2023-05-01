import { LayoutCardFilters } from "../layout/LayoutCardFilters";

export const CardFilterChat = ({
  infoUserActive,
  setOpenInfoUserToMessage,
  userChat,
  users,
}) => {
  const foundUserChat = users.filter((user) => userChat[0] === user.username);

  const { uidWhoWriteMessage, lastMessage, dateCreateMessage, isView } =
    userChat[1].infoUser;

  const userWriteMessage = uidWhoWriteMessage === infoUserActive.uid;

  return (
    <>
      {foundUserChat.map((userFound) => (
        <LayoutCardFilters
          activeAgoUOG={userFound?.activeAgo}
          dateCreateMessageUOG={dateCreateMessage}
          displayNameUOG={userFound?.displayName}
          isActiveUOG={userFound?.isActive}
          isViewUOG={isView}
          key={userFound.uid}
          lastMessageUOG={lastMessage}
          onOpenChatUOG={() => setOpenInfoUserToMessage({ ...userFound })}
          photoUrlUOG={userFound?.photoUrl}
          userWriteMessageUOG={userWriteMessage}
        />
      ))}
    </>
  );
};
