import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GetUsers_MessagesContext } from "../../../context";
import {
  searchFriendByName,
  searchFriendByNameChats,
} from "../../ProfilePage/helpers/searchFriendByName";

export const useChatsFilters = ({ infoUserActive, users, setOpenChats }) => {
  const [openCreateGroup, setOpenCreateGroup] = useState(false);
  const [searchFriend, setSearchFriend] = useState("");
  const { getUsersMessages } = useContext(GetUsers_MessagesContext);
  const navigate = useNavigate();

  const onCloseChats = () => {
    if (!setOpenChats) {
      navigate("/");
    } else {
      setOpenChats(false);
    }
  };

  const listUserActive = getUsersMessages
    .filter((listUser) => listUser.idDoc === infoUserActive.uid)
    .map(({ idDoc, ...userWithoutId }) => userWithoutId);

  const listUsersActiveCarrousel = users.filter((userCarrousel) =>
    Object.entries(listUserActive[0]).find(
      (user) =>
        user[0] === userCarrousel.username &&
        userCarrousel.isActive &&
        userCarrousel
    )
  );

  const searchFriendInTheListCarrousel = useMemo(
    () => searchFriendByName(searchFriend, listUsersActiveCarrousel),
    [searchFriend, listUsersActiveCarrousel]
  );

  const searchFriendInTheListChats = useMemo(
    () =>
      searchFriendByNameChats(searchFriend, Object.entries(listUserActive[0])),
    [searchFriend, Object.entries(listUserActive[0])]
  );

  return {
    // Atributos
    listUserActive: Object.entries(listUserActive[0]),
    listUsersActiveCarrousel,
    openCreateGroup,
    searchFriend,

    // Metodos
    onCloseChats,
    searchFriendInTheListCarrousel,
    searchFriendInTheListChats,
    setOpenCreateGroup,
    setSearchFriend,
  };
};
