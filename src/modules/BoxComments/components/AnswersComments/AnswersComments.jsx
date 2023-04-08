import { useAnswersComments } from "../../hooks";
import { CardComment } from "../CardComment/CardComment";
import { FormCOA } from "../FormCOA/FormCOA";

import styles from "./answersComments.module.css";

export const AnswersComments = ({
  comment,
  filterAnswersByComment,
  infoUserActive,
  startLoadingAnswers,
  users,
}) => {
  const {
    // Atributos
    fileInputRef,
    inputAnswer,
    selectedImage,
    startLoading,

    // Metodos
    onDeleteComment,
    onFileInputchange,
    onSubmitAnswer,
    setInputAnswer,
  } = useAnswersComments({ comment, infoUserActive });

  return (
    <div className={styles.answers__container}>
      <div className={styles.answers__content}>
        {startLoadingAnswers && (
          <div className="loading_box_dimension">
            <div className="spinner"></div>
          </div>
        )}

        <div className={styles.answers__list_answers}>
          {filterAnswersByComment.map((answer) => (
            <CardComment
              infoCOA={answer}
              infoUserActive={infoUserActive}
              key={answer.idAnswer}
              onDeleteCOA={onDeleteComment}
              users={users}
              whatIsAOC="answers"
            />
          ))}
        </div>

        <FormCOA
          onChange={setInputAnswer}
          onChangeFile={onFileInputchange}
          onSubmitForm={onSubmitAnswer}
          placeholder="Responder..."
          refFile={fileInputRef}
          selectedImage={selectedImage}
          startLoading={startLoading}
          value={inputAnswer}
        />
      </div>
    </div>
  );
};
