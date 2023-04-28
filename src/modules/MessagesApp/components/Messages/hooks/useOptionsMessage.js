import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useCloseModal } from "../../../../../hooks";
import {
  arrayUnion,
  deleteField,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseDB } from "../../../../../services";

export const useOptionsMessage = ({
  combinedUid,
  infoUserActive,
  message,
  setOpenOptions,
}) => {
  const ref = useCloseModal(() => setOpenOptions(false));

  const navigate = useNavigate();

  const onGoProfile = () => {
    navigate(`/${message.username}`);
  };

  const onDeleteMessage = async (type) => {
    const pathRef = `messages/${combinedUid}`;

    try {
      if (type === "delete") {
        await updateDoc(
          doc(firebaseDB, pathRef),
          { [message.idMessage]: deleteField() },
          { merge: true }
        );
      } else {
        await setDoc(
          doc(firebaseDB, pathRef),
          {
            [message.idMessage]: {
              deleteForMy: arrayUnion(infoUserActive.uid),
            },
          },
          { merge: true }
        );
      }

      const userNameUser =
        infoUserActive.uid === message.uid
          ? message.usernameOtherUser
          : message.username;

      await setDoc(
        doc(firebaseDB, "usersChats", infoUserActive.uid),
        {
          [userNameUser]: {
            ["infoUser"]: { lastMessage: "mensaje eliminado" },
          },
        },
        { merge: true }
      );

      if (message?.deleteForMy.length === 1) {
        await updateDoc(
          doc(firebaseDB, pathRef),
          { [message.idMessage]: deleteField() },
          { merge: true }
        );
      }

      setOpenOptions(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message.message);

      toast.success("Se copio el texto");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // Atributos
    ref,

    // Metodos
    onCopyMessage,
    onDeleteMessage,
    onGoProfile,
  };
};
