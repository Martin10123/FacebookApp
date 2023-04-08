import { useContext } from "react";
import { GetComOAnsContext } from "../../../context";
import { firebaseDB } from "../../../services";
import { deleteDoc, doc, writeBatch } from "firebase/firestore";

export const useDeletePostComments = ({ isPostOComment }) => {
  const { getComments, getAnswers } = useContext(GetComOAnsContext);

  const onDeleteAllPost = async (idDocument) => {
    const pathFire = isPostOComment === "posts" ? "idPost" : "idComment";

    const filterCommentsByPost = getComments.filter(
      (comment) => comment[pathFire] === idDocument
    );

    const filterAnswersByPost = getAnswers.filter((answer) =>
      filterCommentsByPost.some(
        (comment) => answer.idComment === comment.idComment
      )
    );

    try {
      const batch = writeBatch(firebaseDB);

      if (isPostOComment === "posts") {
        await deleteDoc(doc(firebaseDB, `posts/${idDocument}`));

        filterCommentsByPost.forEach((doc) => {
          batch.delete(doc?.ref);
        });

        filterAnswersByPost.forEach((doc) => {
          batch.delete(doc?.ref);
        });
      } else if (isPostOComment === "comments") {
        await deleteDoc(doc(firebaseDB, `comments/${idDocument}`));

        filterAnswersByPost.forEach((doc) => {
          batch.delete(doc?.ref);
        });
      }

      await batch.commit();
    } catch (error) {
      console.log(error);
    }
  };

  return { onDeleteAllPost };
};
