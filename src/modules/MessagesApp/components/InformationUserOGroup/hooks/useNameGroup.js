import { doc, writeBatch } from "firebase/firestore";
import { useState } from "react";
import { firebaseDB } from "../../../../../services";

export const useNameGroup = ({ userMessage, setOpenChangeName }) => {
  const [nameGroup, setNameGroup] = useState(userMessage.nameGroup);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);

  const onSentChangeName = async () => {
    if (nameGroup.trim().length <= 4) return setFormSubmitted(true);

    setStartLoading(true);

    try {
      const batch = writeBatch(firebaseDB);
      const { idUniqGroup, usersFriends } = userMessage;

      for (const userUid of usersFriends) {
        const userChatRef = doc(firebaseDB, "usersChats", userUid);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            ...userMessage,
            nameGroup,
          },
        });
      }

      await batch.commit();
      setOpenChangeName(false);
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return {
    // Atributos
    formSubmitted,
    nameGroup,
    setNameGroup,
    startLoading,
    // Metodos
    onSentChangeName,
  };
};
