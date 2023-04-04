import { useCountReactionsPost } from "../../../components/Posts/hook";

import styles from "./layoutComment.module.css";

export const ReactionsSvgCount = ({ showIcon = false, post }) => {
  const { countReactions, totalReactions } = useCountReactionsPost({ post });

  return (
    <div className={styles.comments__reactions_svgs}>
      <span>
        {countReactions.map(({ name, img }) => (
          <img
            alt={name}
            className={styles.layout__img_count_reaction}
            key={name}
            src={img}
          />
        ))}
      </span>
      {totalReactions !== 0 && <p>{totalReactions}</p>}

      {showIcon && <i className="fa-solid fa-chevron-right"></i>}
    </div>
  );
};
