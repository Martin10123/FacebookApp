import { useState } from "react";
import { ButtonForm } from "../../Auth/helpers";
import { doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../../services";

import styles from "./editComment.module.css";

export const EditComment = ({ comment, setOpenUpdateComment }) => {
  const [inputAnswer, setInputAnswer] = useState(comment.comment || "");

  const onSubmitCommentUpdate = () => {
    try {
      updateDoc(doc(firebaseDB, "comments", comment.idComment), {
        comment: inputAnswer,
      });

      setOpenUpdateComment(false);
    } catch (error) {
      console.error(error);
      setOpenUpdateComment(false);
    }
  };

  return (
    <div className={styles.update__container}>
      <div className={styles.update__content}>
        <div className={styles.update__nav}>
          <span onClick={() => setOpenUpdateComment(false)}>x</span>
          <p>Editar comentario</p>
          <button
            className={styles.update__btn_close}
            onClick={() => setOpenUpdateComment(false)}
          >
            X
          </button>
        </div>

        <textarea
          className={styles.update__text}
          onChange={({ target }) => setInputAnswer(target.value)}
          placeholder="Actualizar..."
          value={inputAnswer}
        />

        <div className={styles.update__btn_update}>
          <ButtonForm title="Actualizar" onSubmit={onSubmitCommentUpdate} />
        </div>
      </div>
    </div>
  );
};
