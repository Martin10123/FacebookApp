import { arrayRemove, arrayUnion, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../../services";
import { reactionsDataPost } from "../../../helpers";
import { useSaveNotifications } from "../../../../../hooks";

import styles from "./reactionsPost.module.css";

export const ReactionsPost = ({
  idDocumentToSave,
  nameCollectionFirebase,
  reactionObjCollection,
  styleShowAllContainer,
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
      await savaNotification({
        dataToSave: saveReactionFire,
        idToSaveDocument: idDocumentToSave,
        typeNotifi: `reaction${nameCollectionFirebase}`,
        uidUserReceiveNotifi: uidUserCreatePost,
      });
    }
  };

  return (
    <div className={styleShowAllContainer}>
      <div className={styles.reactions__content}>
        {reactionsDataPost.map(({ name, tofire, img, classE }) => (
          <div
            className={styles.reactions__emoji}
            key={name}
            onClick={() => onUpdateReaction(tofire, name)}
          >
            <img src={img} alt={name} />
            <p className={styles[classE]}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
