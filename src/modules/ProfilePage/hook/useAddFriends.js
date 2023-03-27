import { useState } from "react";
import { arrayRemove, arrayUnion, doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { firebaseDB } from "../../../services";
import { useCloseModal } from "../../../hooks";

export const useAddNewFriends = ({
  infoUserActive,
  currentUserFriendsList,
  searchFriendListByUid,
  matchedUser,
}) => {
  const [openResponseRequest, setOpenResponseRequest] = useState(false);
  const activeUserUid = infoUserActive.uid;
  const otherUserUid = matchedUser.uid;

  const otherUserFriendsList = searchFriendListByUid(otherUserUid);

  const isOtherUserInListRequestSent =
    currentUserFriendsList?.requestSent?.includes(otherUserUid);

  const isCurrentUserInListReceivedOtherUser =
    otherUserFriendsList?.requestReceived?.includes(activeUserUid);

  const isCurrentUserInListFriendsOtherUser =
    otherUserFriendsList?.friendsList?.includes(activeUserUid);

  const isOtherUserInListReceivedCurrentUser =
    currentUserFriendsList?.requestReceived?.includes(otherUserUid);

  const currentUserRef = doc(firebaseDB, "friendsEachUsers", activeUserUid);

  const refButtons = useCloseModal(() => setOpenResponseRequest(false));

  const onAddNewFriend = async (displayName) => {
    try {
      const otherUserRef = doc(firebaseDB, "friendsEachUsers", otherUserUid);

      setDoc(
        currentUserRef,
        {
          requestSent: isOtherUserInListRequestSent
            ? arrayRemove(otherUserUid)
            : arrayUnion(otherUserUid),
        },
        { merge: true }
      );

      setDoc(
        otherUserRef,
        {
          requestReceived: isCurrentUserInListReceivedOtherUser
            ? arrayRemove(activeUserUid)
            : arrayUnion(activeUserUid),
        },
        { merge: true }
      );

      toast[isOtherUserInListRequestSent ? "error" : "success"](
        `${
          isOtherUserInListRequestSent ? "Eliminaste la" : "Enviaste una"
        } solicitud de amistad a ${displayName}`
      );
    } catch (error) {
      console.log(error);
      toast.error(
        `No se pudo ${
          isOtherUserInListRequestSent ? "eliminar" : "enviar"
        } la solicitud de amistad a ${displayName}, intentelo nuevamente`
      );
    }
  };

  const onAcceptRequestOfFriend = async ({ uidOtherUser, displayName }) => {
    try {
      setDoc(
        currentUserRef,
        {
          friendsList: arrayUnion(uidOtherUser),
          requestReceived: arrayRemove(uidOtherUser),
        },
        { merge: true }
      );

      setDoc(
        doc(firebaseDB, "friendsEachUsers", uidOtherUser),
        {
          friendsList: arrayUnion(activeUserUid),
          requestSent: arrayRemove(activeUserUid),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onRechacedRequestOfFriend = async ({ uidOtherUser, displayName }) => {
    try {
      setDoc(
        currentUserRef,
        {
          requestReceived: arrayRemove(uidOtherUser),
        },
        { merge: true }
      );

      setDoc(
        doc(firebaseDB, "friendsEachUsers", uidOtherUser),
        {
          requestSent: arrayRemove(activeUserUid),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteSomebodyFriendsList = async ({ uidOtherUser, displayName }) => {
    try {
      setDoc(
        doc(firebaseDB, "friendsEachUsers", activeUserUid),
        {
          friendsList: arrayRemove(uidOtherUser),
        },
        { merge: true }
      );

      setDoc(
        doc(firebaseDB, "friendsEachUsers", uidOtherUser),
        {
          friendsList: arrayRemove(activeUserUid),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // atributos
    isCurrentUserInListFriendsOtherUser,
    isCurrentUserInListReceivedOtherUser,
    isOtherUserInListReceivedCurrentUser,
    isOtherUserInListRequestSent,
    openResponseRequest,
    refButtons,

    // metodos
    onAcceptRequestOfFriend,
    onAddNewFriend,
    onDeleteSomebodyFriendsList,
    onRechacedRequestOfFriend,
    setOpenResponseRequest,
  };
};
