import { doc, serverTimestamp, setDoc, writeBatch } from "firebase/firestore";
import { useState } from "react";
import { firebaseDB } from "../../../services";

export const useAddMessageGroup = () => {
  const [isLoadingGroup, setIsLoadingGroup] = useState(false);

  const onSendMessageGroup = async ({
    infoUserActive,
    messageGroup,
    groupSelect,
    photoMessageGroup,
  }) => {
    setIsLoadingGroup(true);

    try {
      const { usersFriends, createGroup, idUniqGroup } = groupSelect;

      const idDocMessageGroup = `${createGroup}${idUniqGroup}`;

      const docRef = doc(firebaseDB, "messages", idDocMessageGroup);
      const idMessageGroup = `${idDocMessageGroup}-${Math.round(
        Math.random() * 10000
      )}${Math.round(Math.random() * 15000)}`;

      await setDoc(
        docRef,
        {
          [idMessageGroup]: {
            datecreateMessage: new Date().getTime(),
            idMessage: idMessageGroup,
            idUniqGroup,
            isView: false,
            message: messageGroup,
            photoMessage: photoMessageGroup || "",
            uid: infoUserActive.uid,
          },
        },
        { merge: true }
      );

      await onAddNewInfo({
        groupSelect,
        idGroup: idUniqGroup,
        lastMessage: messageGroup,
        uidUserSendMessage: infoUserActive.uid,
        usersInGroup: usersFriends,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingGroup(false);
    }
  };

  return {
    isLoadingGroup,
    onSendMessageGroup,
  };
};

const onAddNewInfo = async ({
  groupSelect,
  idGroup,
  lastMessage,
  uidUserSendMessage,
  usersInGroup,
}) => {
  try {
    const batch = writeBatch(firebaseDB);

    for (const userUid of usersInGroup) {
      const userChatRef = doc(firebaseDB, "usersChats", userUid);

      batch.update(userChatRef, {
        [idGroup + ".infoUser"]: {
          ...groupSelect,
          isView: uidUserSendMessage === userUid ? true : false,
          lastMessage,
          uidWhoWriteMessage: uidUserSendMessage,
        },
        [idGroup + ".date"]: serverTimestamp(),
      });
    }

    await batch.commit();
  } catch (error) {
    console.error(error);
  }
};
