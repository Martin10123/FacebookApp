import { arrayRemove, arrayUnion, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../services";
import { reactionsDataPost } from "../helpers";

import styles from "./layout.module.css";

export const ReactionsPost = ({ foundPost, infoUserActive, idDocPost }) => {
  const onUpdateReactionPost = async (saveReactionFire) => {
    const existingReaction = foundPost?.reactions
      ? Object.keys(foundPost.reactions).find((reaction) =>
          foundPost.reactions[reaction].includes(infoUserActive.uid)
        )
      : null;

    try {
      const reactionsRef = doc(firebaseDB, "reactionsPost", idDocPost);

      if (existingReaction) {
        setDoc(
          reactionsRef,
          {
            reactions: {
              [existingReaction]: arrayRemove(infoUserActive.uid),
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
              [saveReactionFire]: arrayUnion(infoUserActive.uid),
            },
          },
          { merge: true }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.reactions__container}>
      <div className={styles.reactions__content}>
        {reactionsDataPost.map(({ name, tofire, img, classE }) => (
          <div
            className={styles.reactions__emoji}
            key={name}
            onClick={() => onUpdateReactionPost(tofire)}
          >
            <img src={img} alt={name} />
            <p className={styles[classE]}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
