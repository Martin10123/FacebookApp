import { useState } from "react";
import { doc, writeBatch } from "firebase/firestore";
import { firebaseDB } from "../../../../../services";

export const useAddNewUserGroup = ({ userMessage, users }) => {
  const [startLoading, setStartLoading] = useState(false);
  const { usersFriends, idUniqGroup } = userMessage;

  const listUsersInGroup = users.filter(
    (user) => !usersFriends.includes(user.uid)
  );

  const onAddNewMember = async (uidMember) => {
    setStartLoading(true);
    try {
      const newMemberAdd = [...usersFriends, uidMember];

      const batch = writeBatch(firebaseDB);

      const isUserInListOfUsersDelete = userMessage?.usersDelete?.filter(
        (uid) => uid != uidMember
      );

      for (const userUid of newMemberAdd) {
        const userChatRef = doc(firebaseDB, "usersChats", userUid);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            ...userMessage,
            usersFriends: newMemberAdd,
            usersDelete: isUserInListOfUsersDelete,
          },
        });
      }

      await batch.commit();
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return {
    // Atributos
    listUsersInGroup,
    startLoading,
    usersFriends,
    // Metodos
    onAddNewMember,
  };
};
