import { CardComment } from "../CardComment/CardComment";
import { useAnswersComments } from "./useAnswersComments";

import styles from "./answersComments.module.css";

export const AnswersComments = ({ comment, infoUserActive, users }) => {
  const {
    // Atributos
    fileInputRef,
    getAnswers,
    inputAnswer,
    selectedImage,
    startLoading,
    startLoadingAnswers,

    // Metodos
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
          {getAnswers.map((answer) => (
            <CardComment
              comment={answer}
              infoUserActive={infoUserActive}
              isCommentOrAnswer="answers"
              key={answer.idAnswer}
              users={users}
            />
          ))}
        </div>

        <div className={styles.answers__input_form_send_answer}>
          <input
            className={styles.answers__input_form}
            onChange={({ target }) => setInputAnswer(target.value)}
            placeholder="Responder..."
            type="text"
            value={inputAnswer}
          />

          <div className={styles.answers__content_svgs}>
            <div>
              <i
                className="fa-solid fa-camera"
                onClick={() => fileInputRef.current.click()}
              ></i>

              {selectedImage && <p className={styles.answers__count_imgs}>1</p>}
            </div>

            <input
              onChange={onFileInputchange}
              ref={fileInputRef}
              style={{ display: "none" }}
              type="file"
            />

            <span>{startLoading ? "Enviando respuesta..." : ""}</span>

            <button
              className={styles.answers__button_submit}
              onClick={onSubmitAnswer}
            >
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
