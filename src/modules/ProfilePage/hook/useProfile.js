import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthUserContext, GetPostsContext } from "../../../context";

export const useProfile = () => {
  const { infoUserActive, userActive, users, friendsEachUsers } =
    useContext(AuthUserContext);
  const { getPosts, startLoading } = useContext(GetPostsContext);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openYourFriends, setOpenYourFriends] = useState(false);

  const { username } = useParams();

  const matchedUser = users?.find((user) => user.username === username);

  const currentUserFriendsList = friendsEachUsers?.find(
    (listFriends) => listFriends.uidDocUser === userActive?.uid
  );

  const searchFriendListByUid = (uidUser) => {
    return friendsEachUsers?.find(
      (listFriends) => listFriends.uidDocUser === uidUser
    );
  };

  const otherUserFriendsList = searchFriendListByUid(matchedUser?.uid);

  const friendsList = users.filter((user) =>
    otherUserFriendsList?.friendsList?.includes(user.uid)
  );

  const friendsListCurrentUser = users.filter((user) =>
    currentUserFriendsList?.friendsList?.includes(user.uid)
  );

  const isUserActive = matchedUser?.uid === userActive?.uid;

  return {
    // atributos
    currentUserFriendsList,
    friendsList,
    friendsListCurrentUser,
    getPosts,
    infoUserActive,
    isUserActive,
    matchedUser,
    openEditProfile,
    openYourFriends,
    otherUserFriendsList,
    startLoading,

    // metodos
    searchFriendListByUid,
    setOpenEditProfile,
    setOpenYourFriends,
  };
};
