import { useEffect, useState } from "react";
import { useSaveNotifications } from "../../../../hooks";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../services";

export const useListReactionsHistory = ({
  numStorie,
  storieSelectPage,
  userStorie,
}) => {
  const [openViewStorie, setOpenViewStorie] = useState(false);
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [reactionStorie, setReactionStorie] = useState([]);
  const { savaNotification } = useSaveNotifications();

  useEffect(() => {
    setReactionStorie([...(storieSelectPage?.reactionStorie || [])]);
  }, [storieSelectPage]);

  const onReactionStorie = async ({ typeReaction, dateReaction }) => {
    setReactionStorie([
      ...reactionStorie,
      {
        typeReaction,
        dateReaction,
      },
    ]);

    try {
      await setDoc(
        doc(firebaseDB, "stories", storieSelectPage.uidUser),
        {
          ["histories"]: {
            [storieSelectPage.idStorieCreate]: {
              reactionStorie: arrayUnion({
                typeReaction,
                dateReaction,
              }),
            },
          },
        },
        { merge: true }
      );

      await savaNotification({
        dataToSave: typeReaction,
        idToSaveDocument: [userStorie.uid, numStorie],
        typeNotifi: "reactionStorie",
        uidUserReceiveNotifi: userStorie.uid,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // Atributos
    openMessageModal,
    openViewStorie,
    reactionStorie,

    // Metodos
    onReactionStorie,
    setOpenMessageModal,
    setOpenViewStorie,
  };
};
