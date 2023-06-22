import { useContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../services";
import { AuthUserContext } from "../../../../context";

export const usePrivacityHistories = ({ setOpenSettings }) => {
  const { infoUserActive } = useContext(AuthUserContext);
  const [startLoading, setStartLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    radioCheck:
      infoUserActive?.privacityHistories.whoCanSeeHistory || "Publico",
    checkInput:
      infoUserActive?.privacityHistories.whoCanSentMessage || "Enviar mensajes",
  });

  const onOptionChange = ({ target }) => {
    const { name, value, checked } = target;

    setSelectedOption((prevSelectedOption) => {
      if (name === "checkInput") {
        return {
          ...prevSelectedOption,
          [name]: checked ? value : "",
        };
      } else {
        return {
          ...prevSelectedOption,
          [name]: value,
        };
      }
    });
  };

  const onSaveInfo = async () => {
    setStartLoading(true);
    try {
      await setDoc(
        doc(firebaseDB, "users", infoUserActive.uid),
        {
          ...infoUserActive,
          ["privacityHistories"]: {
            whoCanSeeHistory: selectedOption.radioCheck,
            whoCanSentMessage: selectedOption.checkInput,
          },
        },
        { merge: true }
      );

      setOpenSettings(false);
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return {
    // Atributos
    selectedOption,
    startLoading,

    // Metodos
    onOptionChange,
    onSaveInfo,
  };
};
