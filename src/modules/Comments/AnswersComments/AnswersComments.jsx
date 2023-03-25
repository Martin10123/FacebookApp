import { CardComment } from "../CardComment/CardComment";
import { LayoutComment } from "../Layout/LayoutComment";

import styles from "./answersComments.module.css";

export const AnswersComments = () => {
  return (
    <LayoutComment titleModal="Respuestas">
      <CardComment />
      <div className={styles.answers__list_answers}>
        <div className={styles.answers__pass_end}>
          <CardComment />
        </div>
      </div>
    </LayoutComment>
  );
};
