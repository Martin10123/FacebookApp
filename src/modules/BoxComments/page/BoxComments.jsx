import {
  CardComment,
  FormCOA,
  ListReactions,
  ReactionsSvgCount,
} from "../components";
import { usePreventScroll } from "../../../hooks";
import { useBoxComments } from "../hooks";
import { ReactionsPost } from "../../../components";

import styles from "./boxComments.module.css";

export const BoxComments = ({
  infoUserActive,
  post,
  setOpenCommentsPost,
  userCreatePost,
  users,
}) => {
  usePreventScroll();

  const {
    // Atributos
    filterCommentsByPost,
    getReactionSelected,
    inputComment,
    openListReactions,
    refComment,
    selectedImage,
    startLoading,
    startLoadingComments,

    // Metodos
    onChangeFile,
    onCloseComments,
    onDeleteComment,
    onSubmitComment,
    setInputComment,
    setOpenListReactions,
  } = useBoxComments({ infoUserActive, post, setOpenCommentsPost });

  return (
    <>
      <div className={styles.comments__container}>
        <div
          className={styles.comments__back_close}
          onClick={onCloseComments}
        ></div>

        <div className={styles.comments__content}>
          <div className={styles.comments__title_btn_close}>
            <span>X</span>
            <p>Publicación de {userCreatePost?.displayName}</p>
            <button
              className={styles.comments__btn_close_modal}
              onClick={onCloseComments}
            >
              X
            </button>
          </div>

          <div className={styles.comments__count_reactions}>
            <ReactionsSvgCount
              onOpenListReaction={() => setOpenListReactions(true)}
              post={post}
              showIcon={true}
            />

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
                uidUserCreatePost={post.uid}
                uidUserToSaveReaction={infoUserActive.uid}
              />
            </figure>
          </div>

          <div className={styles.comments__list}>
            {startLoadingComments && (
              <div className="loading_box_dimension">
                <div className="spinner"></div>
              </div>
            )}

            {filterCommentsByPost.map((comment) => (
              <CardComment
                infoCOA={comment}
                infoUserActive={infoUserActive}
                key={comment.idComment}
                onDeleteCOA={onDeleteComment}
                users={users}
                whatIsAOC="comments"
              />
            ))}
          </div>

          <FormCOA
            onChange={setInputComment}
            onChangeFile={onChangeFile}
            onSubmitForm={onSubmitComment}
            placeholder="Comentar..."
            refFile={refComment}
            selectedImage={selectedImage}
            startLoading={startLoading}
            value={inputComment}
          />
        </div>
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
