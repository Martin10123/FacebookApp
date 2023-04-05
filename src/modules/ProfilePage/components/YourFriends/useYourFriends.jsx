import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchFriendByName } from "../../helpers/searchFriendByName";

export const useYourFriends = ({
  currentUserFriendsList,
  friendsList,
  searchFriendListByUid,
  setOpenYourFriends,
}) => {
  const [inputForm, setInputForm] = useState("");
  const navigate = useNavigate();

  const countMutualFriends = (friendUid) => {
    const selectedFriend = searchFriendListByUid(friendUid);
    const mutualFriends = selectedFriend?.friendsList?.filter((friend) =>
      currentUserFriendsList?.friendsList?.includes(friend)
    );

    return mutualFriends.length;
  };

  const searchFriendInTheList = useMemo(
    () => searchFriendByName(inputForm, friendsList),
    [inputForm, friendsList]
  );

  const onGoToProfile = (username) => {
    navigate(`/${username}`);
    setOpenYourFriends(false);
  };

  return {
    countMutualFriends,
    inputForm,
    onGoToProfile,
    searchFriendInTheList,
    setInputForm,
  };
};
