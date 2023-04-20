import { useContext } from "react";
import { AuthUserContext } from "../../../../context";

export const useFriendsRequest = () => {
  const { infoUserActive, friendsEachUsers, users } =
    useContext(AuthUserContext);

  const listUserActive = friendsEachUsers.find(
    (listFriends) =>
      listFriends.uidDocUser === infoUserActive?.uid &&
      listFriends.requestReceived
  );

  const listRequest = users.filter((user) =>
    listUserActive?.requestReceived?.includes(user.uid)
  );

  const countMutualFriends = (friendUid) => {
    const selectedFriend = friendsEachUsers?.find(
      (listFriends) => listFriends.uidDocUser === friendUid
    );

    const mutualFriends = selectedFriend?.friendsList?.filter((friend) =>
      listUserActive?.friendsList?.includes(friend)
    );

    return mutualFriends?.length;
  };

  return {
    friendsEachUsers,
    infoUserActive,
    countMutualFriends,
    listRequest,
    listUserActive,
    users,
  };
};
