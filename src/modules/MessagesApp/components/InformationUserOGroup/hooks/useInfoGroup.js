import { useState } from "react";
import {
  deleteDoc,
  deleteField,
  doc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { firebaseDB } from "../../../../../services";

export const useInfoGroup = ({
  infoUserActive,
  setopenInfoGroup,
  setOpenInfoUserToMessage,
  userMessage,
  users,
}) => {
  const [openAddNewUser, setOpenAddNewUser] = useState(false);
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openChangePhotoGroup, setOpenChangePhotoGroup] = useState(false);
  const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
  const [openGoOutGroup, setOpenGoOutGroup] = useState(false);
  const [openViewUsersInGroup, setOpenViewUsersInGroup] = useState(false);

  const {
    createGroup,
    idUniqGroup,
    nameGroup,
    photoGroup,
    uidCreateGroup,
    usersFriends,
  } = userMessage;

  const isUserWhoCreateGroup = infoUserActive.uid === uidCreateGroup;
  const isUserInChat = !userMessage?.usersDelete?.includes(infoUserActive.uid);

  const thereUserActive = users.some((user) => {
    if (usersFriends.includes(user.uid)) {
      if (user.isActive) {
        return true;
      } else {
        return false;
      }
    }
  });

  const onGoOutGroup = async () => {
    try {
      const docRefUser = doc(firebaseDB, "usersChats", infoUserActive.uid);

      if (userMessage?.usersDelete?.includes(infoUserActive.uid)) {
        setOpenInfoUserToMessage(null);

        await updateDoc(docRefUser, {
          [idUniqGroup]: deleteField(),
        });

        return;
      }

      const newUsersFriends = usersFriends.filter(
        (userFriend) => userFriend !== infoUserActive.uid
      );

      setOpenInfoUserToMessage(null);

      const batch = writeBatch(firebaseDB);

      await updateDoc(docRefUser, {
        [idUniqGroup]: deleteField(),
      });

      for (const uidNewUser of newUsersFriends) {
        const userChatRef = doc(firebaseDB, "usersChats", uidNewUser);
        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            ...userMessage,
            usersFriends: newUsersFriends,
          },
        });
      }
      await batch.commit();
      setopenInfoGroup(false);
    } catch (error) {
      console.error(error);
    } finally {
      if (usersFriends.length === 1) {
        const idDocMessageGroup = `${createGroup}${idUniqGroup}`;

        await deleteDoc(doc(firebaseDB, `messages/${idDocMessageGroup}`));
      }

      setOpenGoOutGroup(false);
    }
  };

  return {
    // Atributos
    isUserInChat,
    isUserWhoCreateGroup,
    nameGroup,
    openAddNewUser,
    openChangeName,
    openChangePhotoGroup,
    openDeleteGroup,
    openGoOutGroup,
    openViewUsersInGroup,
    photoGroup,
    thereUserActive,

    // Metodos
    onGoOutGroup,
    setOpenAddNewUser,
    setOpenChangeName,
    setOpenChangePhotoGroup,
    setOpenDeleteGroup,
    setOpenGoOutGroup,
    setOpenViewUsersInGroup,
  };
};
