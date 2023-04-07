import { useEffect, useState } from "react";
import { firebaseDB } from "../../../services";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  writeBatch,
} from "firebase/firestore";

export const useDeletePostComments = ({ firePath, infoToSearchFire }) => {
  const [postData, setPostData] = useState({ comments: [], answers: [] });

  const getPostData = async () => {
    const idDocument =
      firePath === "posts" ? infoToSearchFire.idDoc : infoToSearchFire.idPost;

    const commentsRef = collection(
      firebaseDB,
      `commentsPosts/${idDocument}/comments`
    );

    const commentsSnap = await getDocs(commentsRef);

    const comments = commentsSnap.docs.map((doc) => ({
      idComment: doc.id,
      doc,
    }));

    const answers = [];

    for (const comment of comments) {
      const queryFire = collection(
        firebaseDB,
        `answersComments/${comment.idComment}/answers`
      );

      const answersSnap = await getDocs(queryFire);

      const answersData = answersSnap.docs.map((doc) => ({
        idAnswer: doc.id,
        doc,
      }));

      answers.push(...answersData);
    }

    setPostData({ comments, answers });
  };

  useEffect(() => {
    getPostData();
  }, []);

  const onDeletePost = async () => {
    try {
      const batch = writeBatch(firebaseDB);

      if (firePath.toLowerCase() === "posts") {
        await deleteDoc(doc(firebaseDB, `posts/${infoToSearchFire.idDoc}`));

        postData.comments.forEach(({ doc }) => {
          batch.delete(doc?.ref);
        });

        postData.answers.forEach(({ doc }) => {
          batch.delete(doc?.ref);
        });
      } else if (firePath.toLowerCase() === "comments") {
        await deleteDoc(
          doc(
            firebaseDB,
            `commentsPosts/${infoToSearchFire.idPost}/comments/${infoToSearchFire.idComment}`
          )
        );

        postData.answers.forEach(({ doc }) => {
          batch.delete(doc?.ref);
        });
      }

      await batch.commit();
    } catch (error) {
      console.log(error);
    }
  };

  return { onDeletePost };
};
