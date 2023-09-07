import { useRef, useState } from "react";
import { getWhatReactionSelected } from "../../helpers";
import { ReactionsPost } from "./ReactionsPost/ReactionsPost";

import styles from "./layoutComponents.module.css";

export const ButtonsReactions = ({
  infoUserActive,
  post,
  setOpenCommentsPost,
  setOpenSharePost,
}) => {
  const [openReactios, setOpenReactios] = useState(false);
  const timeoutRef = useRef(null);
  const getReactionSelected = getWhatReactionSelected({
    infoUserActive,
    reactions: post?.reactions,
  });

  const onOpenReactions = () => {
    clearTimeout(timeoutRef.current);
    setOpenReactios(true);
  };

  const onCloseReactions = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenReactios(false);
    }, 200);
  };

  return (
    <div className={styles.layout__buttons_reactions}>
      <button
        className={styles.layout__button_like}
        onMouseEnter={onOpenReactions}
        onMouseLeave={onCloseReactions}
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

        {openReactios && (
          <ReactionsPost
            idDocumentToSave={post.idDoc}
            nameCollectionFirebase="posts"
            reactionObjCollection={post?.reactions}
            setOpenReactios={setOpenReactios}
            uidUserCreatePost={post.uid}
            uidUserToSaveReaction={infoUserActive?.uid}
          />
        )}
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
