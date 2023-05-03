import { register } from "../../../../../assets";
import { LayoutCardFilters } from "../layout/LayoutCardFilters";

export const CardFilterGroups = ({
  setOpenInfoUserToMessage,
  userChat,
  users,
}) => {
  const {
    nameGroup,
    usersFriends,
    isView,
    lastMessage,
    photoGroup,
    createGroup,
  } = userChat[1].infoUser;

  const thereUserActive = users.some((user) => {
    if (usersFriends.includes(user.uid)) {
      if (user.isActive) {
        return true;
      } else {
        return false;
      }
    }
  });

  return (
    <>
      <LayoutCardFilters
        activeAgoUOG={""}
        dateCreateMessageUOG={createGroup}
        displayNameUOG={nameGroup}
        isActiveUOG={thereUserActive}
        isViewUOG={isView}
        lastMessageUOG={lastMessage}
        onOpenChatUOG={() =>
          setOpenInfoUserToMessage({ ...userChat[1].infoUser })
        }
        photoUrlUOG={photoGroup || register}
        userWriteMessageUOG={null}
      />
    </>
  );
};
