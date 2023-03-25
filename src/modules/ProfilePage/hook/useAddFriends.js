import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../../services";

export const useAddFriends = ({ infoUserActive, userMatchUsername }) => {
  const onAddFriend = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return { onAddFriend };
};
