import { useState } from "react";
import { useProfile } from "../../ProfilePage/hook";
import { doc, serverTimestamp, writeBatch } from "firebase/firestore";
import { firebaseDB } from "../../../services";

export const useCreateGroup = ({ infoUserActive, setOpenCreateGroup }) => {
  const [selectedUsers, setSelectedUsers] = useState([infoUserActive.uid]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [nameGroup, setNameGroup] = useState("");
  const { friendsListCurrentUser } = useProfile();

  const onCheckUser = ({ target }) => {
    const userUid = target.id;
    const isChecked = target.checked;

    if (isChecked) {
      setSelectedUsers([...selectedUsers, userUid]);
    } else {
      setSelectedUsers(selectedUsers.filter((uid) => uid !== userUid));
    }
  };

  const onCreateGroup = async () => {
    if (nameGroup.trim().length <= 4 || selectedUsers.length <= 2)
      return setFormSubmitted(true);

    setStartLoading(true);

    try {
      const batch = writeBatch(firebaseDB);

      const idUniqGroup = `${nameGroup}${Math.round(
        Math.random() * 10000
      )}${Math.round(Math.random() * 15000)}`.replace(/\s/g, "");

      for (const userUid of selectedUsers) {
        const userChatRef = doc(firebaseDB, "usersChats", userUid);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            createGroup: new Date().getTime(),
            idUniqGroup,
            isGroup: true,
            isView: false,
            lastMessage: " ",
            nameCreateGroup: infoUserActive.displayName,
            nameGroup,
            uidCreateGroup: infoUserActive.uid,
            usernameCreateGroup: infoUserActive.username,
            usersFriends: selectedUsers,
          },
          [idUniqGroup + ".date"]: serverTimestamp(),
        });
      }

      await batch.commit();
      setOpenCreateGroup(false);
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return {
    // Atributos
    formSubmitted,
    friendsListCurrentUser,
    nameGroup,
    selectedUsers,
    startLoading,

    // Metodos
    onCheckUser,
    onCreateGroup,
    setNameGroup,
  };
};
