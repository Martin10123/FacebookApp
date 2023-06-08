import { useContext, useState } from "react";
import { useCountReactionsPost } from "../../hook";
import { GetComOAnsContext } from "../../../../context";
import { ListReactions } from "../../../../modules";

import styles from "./layoutComponents.module.css";

export const CountReactions = ({ post }) => {
  const { countReactions, totalReactions } = useCountReactionsPost({ post });
  const { getComments, getAnswers } = useContext(GetComOAnsContext);
  const [openListReactions, setOpenListReactions] = useState(false);

  const countCommentAnswersOfPost = () => {
    const filterCommentsByPost = getComments.filter(
      (comment) => comment.idPost === post.idDoc
    );

    const filterAnswersByPost = getAnswers.filter((answer) =>
      filterCommentsByPost.some(
        (comment) => answer.idComment === comment.idComment
      )
    );

    return filterCommentsByPost.length + filterAnswersByPost.length;
  };

  return (
    <>
      <div className={styles.layout__content_reactions_comments_share}>
        <div
          className={styles.layout__content_amount_reactions}
          onClick={() => setOpenListReactions(true)}
        >
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
          <p>{countCommentAnswersOfPost()} comentarios</p>
          <p>{post?.howManyPeopleSharePost || 0} compartidas</p>
        </span>
      </div>

      {openListReactions && (
        <ListReactions
          listReactionsUse={post}
          setOpenListReactions={setOpenListReactions}
        />
      )}
    </>
  );
};
