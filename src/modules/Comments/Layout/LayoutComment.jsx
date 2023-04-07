import { ReactionsPost } from "../../../components";
import { getWhatReactionSelected } from "../../../components/Posts/helpers";
import { ReactionsSvgCount } from "./ReactionsSvgCount";

import styles from "./layoutComment.module.css";

export const LayoutComment = ({
  children,
  fileInputRef,
  infoUserActive,
  onchangeInput,
  onCloseComment,
  onFileInputchange,
  onOpenListReactions,
  onSubmitFormButton,
  placeholderInput,
  post,
  selectedImage,
  showButtonReaction = false,
  showIconReactionsCount = false,
  startLoading,
  titleModal = "",
  valueInput,
}) => {
  const getReactionSelected = getWhatReactionSelected({
    infoUserActive,
    reactions: post?.reactions,
  });

  return (
    <div className={styles.comments__container}>
      <div
        className={styles.comments__back_close}
        onClick={onCloseComment}
      ></div>
      <div className={styles.comments__content}>
        <div className={styles.comments__title_btn_close}>
          <span onClick={onCloseComment}>X</span>
          <p>{titleModal}</p>
          <button
            className={styles.comments__btn_close_modal}
            disabled={startLoading}
            onClick={onCloseComment}
          >
            X
          </button>
        </div>

        <div className={styles.comments__count_reactions}>
          <ReactionsSvgCount
            onOpenListReaction={onOpenListReactions}
            post={post}
            showIcon={showIconReactionsCount}
          />

          {showButtonReaction && (
            <>
              <figure className={styles.comments__reaction_post}>
                {getReactionSelected?.img ? (
                  <img
                    className={styles.comments__reaction_selected}
                    src={getReactionSelected.img}
                    alt={`Imagen del ${getReactionSelected.name}`}
                  />
                ) : (
                  <i className="fa-regular fa-thumbs-up"></i>
                )}

                <ReactionsPost
                  idDocumentToSave={post.idDoc}
                  nameCollectionFirebase="posts"
                  reactionObjCollection={post?.reactions}
                  styleShowAllContainer={styles.layout__container_float_buttons}
                  uidUserToSaveReaction={infoUserActive.uid}
                />
              </figure>
            </>
          )}
        </div>

        <div className={styles.comments__list}>{children}</div>

        <form
          className={styles.comments__input_form_send_comment}
          onSubmit={onSubmitFormButton}
        >
          <input
            onChange={({ target }) => onchangeInput(target.value)}
            placeholder={placeholderInput}
            type="text"
            value={valueInput}
          />

          <div className={styles.comments__content_svgs}>
            <div>
              <i
                className="fa-solid fa-camera"
                onClick={() => fileInputRef.current.click()}
              ></i>

              {selectedImage && <p className={styles.create__count_imgs}>1</p>}
            </div>

            <input
              onChange={onFileInputchange}
              ref={fileInputRef}
              style={{ display: "none" }}
              type="file"
            />

            <span>{startLoading ? "Enviando comentario..." : ""}</span>

            <button
              className={styles.comments__button_submit}
              disabled={startLoading}
              type="submit"
            >
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
