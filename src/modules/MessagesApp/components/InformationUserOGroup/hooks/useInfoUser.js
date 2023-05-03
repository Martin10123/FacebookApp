import { deleteDoc, deleteField, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseDB } from "../../../../../services";

export const useInfoUser = ({
  infoUserActive,
  setopenInfoGroup,
  setOpenInfoUserToMessage,
  userMessage,
}) => {
  const { isActive, displayName, uid, username } = userMessage;

  const [openSureDelete, setOpenSureDelete] = useState(false);
  const [openSureDeleteChat, setOpenSureDeleteChat] = useState(false);
  const navigate = useNavigate();

  const onDeleteChat = async () => {
    try {
      const docRef1 = doc(firebaseDB, "usersChats", infoUserActive.uid);
      const docRef2 = doc(firebaseDB, "usersChats", uid);

      await updateDoc(docRef1, {
        [username]: deleteField(),
      });

      await updateDoc(docRef2, {
        [infoUserActive.username]: deleteField(),
      });

      setOpenInfoUserToMessage(null);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSureDeleteChat(false);
      setopenInfoGroup(false);
    }
  };

  return {
    // Atributos
    displayName,
    isActive,
    openSureDelete,
    openSureDeleteChat,
    username,

    // Metodos
    navigate,
    onDeleteChat,
    setOpenSureDelete,
    setOpenSureDeleteChat,
  };
};
