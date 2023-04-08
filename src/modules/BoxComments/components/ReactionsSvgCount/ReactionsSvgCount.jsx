import { useCountReactionsPost } from "../../../../components/Posts/hook";

import styles from "../../page/boxComments.module.css";

export const ReactionsSvgCount = ({
  onOpenListReaction,
  post,
  showIcon = false,
}) => {
  const { countReactions, totalReactions } = useCountReactionsPost({ post });

  return (
    <div
      className={styles.comments__reactions_svgs}
      onClick={onOpenListReaction}
    >
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
