import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase/firebaseConfig";

export const useAddFriends = ({ infoUserActive, userMatchUsername }) => {
  const isPendingReceivedActive = infoUserActive?.requestSent?.includes(
    userMatchUsername.uid
  );
  const isPendingReceivedOther = userMatchUsername?.requestReceived?.includes(
    infoUserActive.uid
  );

  const isPendingReceived = userMatchUsername?.requestReceived?.includes(
    infoUserActive.uid
  );

  // Valida si el usuario activo esta incluido en la lista de amigos de este usuario (DEL OTRO USUARIO)
  const isFriendAccept = userMatchUsername?.friendsList?.includes(
    infoUserActive.uid
  );

  const onAddFriends = async () => {
    try {
      const currentUserRef = doc(firebaseDB, "users", userMatchUsername.uid);
      const otherUserRef = doc(firebaseDB, "users", infoUserActive.uid);

      await updateDoc(currentUserRef, {
        requestReceived: isPendingReceivedActive
          ? arrayRemove(infoUserActive.uid)
          : arrayUnion(infoUserActive.uid),
      });

      await updateDoc(otherUserRef, {
        requestSent: isPendingReceivedOther
          ? arrayRemove(userMatchUsername.uid)
          : arrayUnion(userMatchUsername.uid),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isPendingReceivedActive,
    isPendingReceivedOther,
    onAddFriends,
  };
};
