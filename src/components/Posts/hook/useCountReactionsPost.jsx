import { useEffect, useState } from "react";
import { countReactionsSelected } from "../helpers";

export const useCountReactionsPost = ({ post }) => {
  const [totalReactions, setTotalReactions] = useState(0);
  const reactions = post?.reactions;

  useEffect(() => {
    let total = 0;
    for (const key in reactions) {
      total += reactions[key].length;
    }

    setTotalReactions(total);
  }, [reactions]);

  const countReactions = countReactionsSelected({ reactions });

  return {
    totalReactions,
    countReactions,
  };
};
