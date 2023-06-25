import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { firebaseDB } from "../../../../services";

export const useCreateHistory = ({ infoUserActive, setOpenHistoryText }) => {
  const [textHistory, setTextHistory] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [startLoading, setStartLoading] = useState(false);

  const styleColorBack = selectColor ? { background: selectColor } : {};

  const onSaveHistory = async () => {
    if (textHistory.trim().length === 0) return;

    setStartLoading(true);

    const generateId =
      infoUserActive.username +
      new Date().getTime() +
      Math.random(Math.round() * 1000);

    const privacityHistories = {
      canSentMessage:
        infoUserActive?.privacityHistories?.whoCanSentMessage || "Publico",
      typePrivacityHistory:
        infoUserActive?.privacityHistories?.whoCanSeeHistory ||
        "Enviar mensajes",
    };

    try {
      await setDoc(
        doc(firebaseDB, "stories", infoUserActive.uid),
        {
          ["histories"]: {
            [generateId]: {
              canSentMessage: privacityHistories.canSentMessage,
              date: new Date().getTime(),
              idStorieCreate: generateId,
              selectColor,
              textHistory,
              typePrivacityHistory: privacityHistories.typePrivacityHistory,
              uidUser: infoUserActive.uid,
              whoHaveSeenHistory: [],
            },
          },
        },
        { merge: true }
      );

      setOpenHistoryText(false);
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return {
    // Atributos
    selectColor,
    startLoading,
    styleColorBack,
    textHistory,

    // Metodos
    onSaveHistory,
    setSelectColor,
    setTextHistory,
  };
};
