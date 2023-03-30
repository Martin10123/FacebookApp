import { useEffect, useState } from "react";
import { countReactionsSelected } from "../helpers";

import styles from "./layout.module.css";

export const CountReactions = ({ foundPost }) => {
  const [totalReactions, setTotalReactions] = useState(0);
  const reactions = foundPost?.reactions;

  useEffect(() => {
    let total = 0;
    for (const key in reactions) {
      total += reactions[key].length;
    }

    setTotalReactions(total);
  }, [reactions]);

  const countReactions = countReactionsSelected({ reactions });

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
        <p>300 comentarios</p>
        <p>20 compartidas</p>
      </span>
    </div>
  );
};
