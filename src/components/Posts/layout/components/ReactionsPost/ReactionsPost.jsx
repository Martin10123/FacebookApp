import { reactionsDataPost } from "../../../helpers";
import { useReactioPost } from "../../hook/useReactioPost";

import styles from "./reactionsPost.module.css";

export const ReactionsPost = ({
  idDocumentToSave,
  idSaveReactionNotification,
  nameCollectionFirebase,
  reactionObjCollection,
  setOpenReactios,
  uidUserCreatePost,
  uidUserToSaveReaction,
}) => {
  const { onUpdateReaction } = useReactioPost({
    idDocumentToSave,
    idSaveReactionNotification,
    nameCollectionFirebase,
    reactionObjCollection,
    setOpenReactios,
    uidUserCreatePost,
    uidUserToSaveReaction,
  });

  return (
    <div className={styles.reactions__container}>
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
