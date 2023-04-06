import { useBoxComments } from "../../../../modules/Comments/BoxComments/useBoxComments";
import { useCountReactionsPost } from "../../hook";

import styles from "./layoutComponents.module.css";

export const CountReactions = ({ post, infoUserActive }) => {
  const { countReactions, totalReactions } = useCountReactionsPost({ post });
  const { countComment } = useBoxComments({ post, infoUserActive });

  return (
    <div className={styles.layout__content_reactions_comments_share}>
      <div className={styles.layout__content_amount_reactions}>
        {countReactions.map(({ name, img }) => (
          <img
            alt={name}
            className={styles.layout__img_count_reaction}
            key={name}
            src={img}
          />
        ))}

        <p>{totalReactions}</p>
      </div>
      <span>
        <p>{countComment} comentarios</p>
        <p>{post?.howManyPeopleSharePost?.length || 0} compartidas</p>
      </span>
    </div>
  );
};
