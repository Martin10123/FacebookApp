import { arrayRemove, arrayUnion, doc, setDoc } from "firebase/firestore";
import { useSaveNotifications } from "../../../../hooks";
import { firebaseDB } from "../../../../services";

export const useReactioPost = ({
  idDocumentToSave,
  idSaveReactionNotification,
  nameCollectionFirebase,
  reactionObjCollection,
  setOpenReactios,
  uidUserCreatePost,
  uidUserToSaveReaction,
}) => {
  const { savaNotification } = useSaveNotifications();

  const onUpdateReaction = async (saveReactionFire) => {
    const existingReaction = reactionObjCollection
      ? Object.keys(reactionObjCollection).find((reaction) =>
          reactionObjCollection[reaction].includes(uidUserToSaveReaction)
        )
      : null;

    try {
      const reactionsRef = doc(
        firebaseDB,
        nameCollectionFirebase,
        idDocumentToSave
      );

      if (existingReaction) {
        setDoc(
          reactionsRef,
          {
            reactions: {
              [existingReaction]: arrayRemove(uidUserToSaveReaction),
            },
          },
          { merge: true }
        );
      }

      if (existingReaction !== saveReactionFire) {
        setDoc(
          reactionsRef,
          {
            reactions: {
              [saveReactionFire]: arrayUnion(uidUserToSaveReaction),
            },
          },
          { merge: true }
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setOpenReactios(false);
      let idSaveNotifi;

      if (nameCollectionFirebase === "answers") {
        idSaveNotifi = idSaveReactionNotification;
      } else {
        idSaveNotifi = idDocumentToSave;
      }

      await savaNotification({
        dataToSave: saveReactionFire,
        idToSaveDocument: idSaveNotifi,
        typeNotifi: `reaction${nameCollectionFirebase}`,
        uidUserReceiveNotifi: uidUserCreatePost,
      });
    }
  };

  return {
    onUpdateReaction,
  };
};
