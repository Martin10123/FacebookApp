import { ReactionsPost } from "./ReactionsPost";
import { getWhatReactionSelected } from "../helpers";

import styles from "./layout.module.css";

export const ButtonsReactions = ({
  post,
  infoUserActive,
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
            className={styles.loyaout__reaction_selected}
            src={getReactionSelected?.img}
            alt={`Imagen del ${getReactionSelected?.name}`}
          />
        ) : (
          <i className="fa-regular fa-thumbs-up"></i>
        )}
        {getReactionSelected?.name || "Like"}

        <ReactionsPost post={post} infoUserActive={infoUserActive} />
      </button>
      <button className={styles.layout__button}>
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
