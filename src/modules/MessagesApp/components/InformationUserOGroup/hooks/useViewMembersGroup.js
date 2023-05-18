import { doc, updateDoc, writeBatch } from "firebase/firestore";
import { useState } from "react";
import { firebaseDB } from "../../../../../services";

export const useViewMembersGroup = ({ userMessage, users }) => {
  const { usersFriends, uidCreateGroup, idUniqGroup } = userMessage;
  const [openDeleteMember, setOpenDeleteMember] = useState(false);

  const [{ displayNameUser, uidUser }, setInfoMember] = useState({
    displayNameUser: "",
    uidUser: "",
  });

  const listUsersInGroup = users.filter((user) =>
    usersFriends.includes(user.uid)
  );

  const onOpenSureDelete = (uid, name) => {
    setOpenDeleteMember(true);

    setInfoMember({ displayNameUser: name, uidUser: uid });
  };

  const onDeleteMember = async (uidUser) => {
    try {
      const newUsersFriends = usersFriends.filter(
        (userFriend) => userFriend !== uidUser
      );

      const newUserDelete =
        userMessage?.usersDelete && userMessage?.usersDelete.length != 0
          ? [...userMessage?.usersDelete, uidUser]
          : [uidUser];

      const userDelete = doc(firebaseDB, "usersChats", uidUser);

      await updateDoc(userDelete, {
        [idUniqGroup + ".infoUser"]: {
          ...userMessage,
          usersFriends: newUsersFriends,
          usersDelete: newUserDelete,
        },
      });

      const batch = writeBatch(firebaseDB);

      for (const uidNewUser of newUsersFriends) {
        const userChatRef = doc(firebaseDB, "usersChats", uidNewUser);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            ...userMessage,
            usersFriends: newUsersFriends,
            usersDelete: newUserDelete,
          },
        });
      }

      await batch.commit();
    } catch (error) {
      console.error(error);
    } finally {
      setOpenDeleteMember(false);
    }
  };

  return {
    // Atributos
    displayNameUser,
    listUsersInGroup,
    uidCreateGroup,
    openDeleteMember,
    uidUser,

    // Metodos
    onDeleteMember,
    onOpenSureDelete,
    setOpenDeleteMember,
  };
};
