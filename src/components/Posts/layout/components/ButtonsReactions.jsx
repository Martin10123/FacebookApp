import { getWhatReactionSelected } from "../../helpers";
import { ReactionsPost } from "./ReactionsPost/ReactionsPost";

import styles from "./layoutComponents.module.css";

export const ButtonsReactions = ({
  infoUserActive,
  post,
  setOpenCommentsPost,
  setOpenSharePost,
}) => {
  const getReactionSelected = getWhatReactionSelected({
    infoUserActive,
    reactions: post?.reactions,
  });

  return (
    <div className={styles.layout__buttons_reactions}>
      <button
        className={styles.layout__button_like}
        style={{ color: getReactionSelected?.textColor || "" }}
      >
        {getReactionSelected?.img ? (
          <img
            className={styles.layout__reaction_selected}
            src={getReactionSelected?.img}
            alt={`Imagen del ${getReactionSelected?.name}`}
          />
        ) : (
          <i className="fa-regular fa-thumbs-up"></i>
        )}
        {getReactionSelected?.name || "Like"}

        <ReactionsPost
          idDocumentToSave={post.idDoc}
          nameCollectionFirebase="posts"
          reactionObjCollection={post?.reactions}
          styleShowAllContainer={styles.reactions__container}
          uidUserToSaveReaction={infoUserActive.uid}
        />
      </button>
      <button
        className={styles.layout__button}
        onClick={() => setOpenCommentsPost(true)}
      >
        <i className="fa-regular fa-comment"></i>
        Comentar
      </button>
      <button
        className={styles.layout__button}
        onClick={() => setOpenSharePost(true)}
      >
        <i className="fa-regular fa-share-from-square"></i>
        Compartir
      </button>
    </div>
  );
};
