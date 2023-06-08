import { arrayRemove, arrayUnion, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../services";
import { useSaveNotifications } from "../../../hooks";

export const useCardListReactionUser = ({
  friendsEachUsers,
  infoUserActive,
  uidUser,
}) => {
  const { savaNotification } = useSaveNotifications();

  const currentUserFriendsList = friendsEachUsers?.find(
    (listFriends) => listFriends.uidDocUser === infoUserActive.uid
  );
  const otherUserFriendsList = friendsEachUsers?.find(
    (listFriends) => listFriends.uidDocUser === uidUser
  );

  const isOtherUserInListRequestSent =
    currentUserFriendsList?.requestSent?.includes(uidUser);

  const isCurrentUserInListReceivedOtherUser =
    otherUserFriendsList?.requestReceived?.includes(infoUserActive.uid);

  const isCurrentUserInListFriendsOtherUser =
    otherUserFriendsList?.friendsList?.includes(infoUserActive.uid);

  const isOtherUserInListReceivedCurrentUser =
    currentUserFriendsList?.requestReceived?.includes(uidUser);

  const onAddNewFriend = async () => {
    try {
      const currentUserRef = doc(
        firebaseDB,
        "friendsEachUsers",
        infoUserActive.uid
      );
      const otherUserRef = doc(firebaseDB, "friendsEachUsers", uidUser);

      setDoc(
        currentUserRef,
        {
          requestSent: isOtherUserInListRequestSent
            ? arrayRemove(uidUser)
            : arrayUnion(uidUser),
        },
        { merge: true }
      );

      setDoc(
        otherUserRef,
        {
          requestReceived: isCurrentUserInListReceivedOtherUser
            ? arrayRemove(infoUserActive.uid)
            : arrayUnion(infoUserActive.uid),
        },
        { merge: true }
      );
    } catch (error) {
      console.error(error);
    } finally {
      await savaNotification({
        dataToSave: "",
        idToSaveDocument: uidUser,
        typeNotifi: "requestFriend",
        uidUserReceiveNotifi: uidUser,
      });
    }
  };

  return {
    // Atributos
    isCurrentUserInListFriendsOtherUser,
    isCurrentUserInListReceivedOtherUser,
    isOtherUserInListReceivedCurrentUser,
    isOtherUserInListRequestSent,

    // Metodos
    onAddNewFriend,
  };
};
