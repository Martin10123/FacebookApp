import { useState } from "react";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { firebaseDB } from "../../../services";

export const useAddMessage = () => {
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const onSendMessage = async ({
    infoUserActive,
    message,
    userSelected,
    photoMessage,
  }) => {
    setIsSending(true);

    try {
      const {
        uid: authorUid,
        username: authorUsername,
        displayName: authorDisplayName,
        lastName: authorLastName,
      } = infoUserActive;

      const {
        uid: recipientUid,
        username: recipientUsername,
        displayName: recipientDisplayName,
        lastName: recipientLastName,
      } = userSelected;

      const combinedUid =
        authorUid > recipientUid
          ? authorUid + recipientUid
          : recipientUid + authorUid;

      await onAddNewInfo({
        message,
        uidSavePathFire: recipientUid,
        uidWhoWriteMessage: authorUid,
        usernameUser: authorUsername,
        displayNameUser: authorDisplayName,
        lastNameUser: authorLastName,
        isView: false,
      });

      await onAddNewInfo({
        message,
        uidSavePathFire: authorUid,
        uidWhoWriteMessage: authorUid,
        usernameUser: recipientUsername,
        displayNameUser: recipientDisplayName,
        lastNameUser: recipientLastName,
        isView: true,
      });

      const docRef = doc(firebaseDB, "messages", combinedUid);
      const idMessage = `${combinedUid}-${Math.round(
        Math.random() * 10000
      )}${Math.round(Math.random() * 15000)}`;

      await setDoc(
        docRef,
        {
          [idMessage]: {
            datecreateMessage: new Date().getTime(),
            deleteForMy: [],
            idMessage,
            isView: false,
            message,
            photoMessage: photoMessage || "",
            uid: authorUid,
            uidOtherUser: recipientUid,
            username: authorUsername,
            usernameOtherUser: recipientUsername,
          },
        },
        { merge: true }
      );

      navigate("/chats");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return {
    // Atributos
    isSending,

    // Metodos
    onSendMessage,
  };
};

const onAddNewInfo = async ({
  displayNameUser,
  lastNameUser,
  message,
  uidSavePathFire,
  uidWhoWriteMessage,
  usernameUser,
  isView,
}) => {
  try {
    await updateDoc(
      doc(firebaseDB, "usersChats", uidSavePathFire),
      {
        [usernameUser + ".infoUser"]: {
          dateCreateMessage: new Date().getTime(),
          displayNameUser,
          isView,
          lastMessage: message,
          lastNameUser,
          uidWhoWriteMessage,
        },
        [usernameUser + ".date"]: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(error);
  }
};
