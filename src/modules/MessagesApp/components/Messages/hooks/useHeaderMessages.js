import { useState } from "react";
import { useChatsFilters } from "../../../hook/useChatsFilters";
import { photoUser, register } from "../../../../../assets";

export const useHeaderMessages = ({ infoUserActive, users, userMessage }) => {
  const [openInfoGroup, setopenInfoGroup] = useState(false);
  const { listUserActive } = useChatsFilters({ infoUserActive, users });

  const userSelected = userMessage?.isGroup
    ? listUserActive.find(
        (userSelect) => userSelect[0] === userMessage.idUniqGroup
      )[1].infoUser
    : users.find((userSelect) => userSelect.username === userMessage.username);

  const thereUserActive = users.some((user) => {
    if (userSelected?.usersFriends?.includes(user.uid)) {
      if (user.isActive) {
        return true;
      } else {
        return false;
      }
    }
  });

  const dataHeader = userSelected?.isGroup
    ? {
        activeAgo: false,
        displayName: userSelected?.nameGroup,
        isActive: thereUserActive,
        photoUrl: userSelected?.photoGroup || register,
      }
    : {
        activeAgo: userSelected?.activeAgo,
        displayName: userSelected?.displayName,
        isActive: userSelected?.isActive,
        photoUrl: userSelected?.photoUrl || photoUser,
      };

  return {
    dataHeader,
    openInfoGroup,
    setopenInfoGroup,
    userSelected,
  };
};
