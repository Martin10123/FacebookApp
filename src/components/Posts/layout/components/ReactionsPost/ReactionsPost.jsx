import { arrayRemove, arrayUnion, doc, setDoc } from "firebase/firestore";
import { reactionsDataPost } from "../../../helpers";
import { firebaseDB } from "../../../../../services";

import styles from "./reactionsPost.module.css";

export const ReactionsPost = ({
  idDocumentToSave,
  nameCollectionFirebase,
  reactionObjCollection,
  styleShowAllContainer,
  uidUserToSaveReaction,
}) => {
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
    }
  };

  return (
    <div className={styleShowAllContainer}>
      <div className={styles.reactions__content}>
        {reactionsDataPost.map(({ name, tofire, img, classE }) => (
          <div
            className={styles.reactions__emoji}
            key={name}
            onClick={() => onUpdateReaction(tofire)}
          >
            <img src={img} alt={name} />
            <p className={styles[classE]}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
