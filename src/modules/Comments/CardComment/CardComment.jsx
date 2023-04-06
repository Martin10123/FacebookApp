import { EditComment } from "../EditComment/EditComment";
import { getTimeAgo } from "../../../helpers";
import { photoUser } from "../../../assets";
import { ReactionsPost, SureDelete } from "../../../components";
import { ReactionsSvgCount } from "../Layout/ReactionsSvgCount";
import { useCardComment } from "./useCardComment";
import { ListReactions } from "../ListReactions/ListReactions";
import { AnswersComments } from "..";
import { useAnswersComments } from "../AnswersComments/useAnswersComments";

import styles from "./cardComment.module.css";

export const CardComment = ({
  comment,
  infoUserActive,
  isCommentOrAnswer,
  users,
}) => {
  const {
    // atributos
    idDocumentCOA,
    isThisUserCreatedComment,
    openAnswers,
    openListReactions,
    openOptions,
    openSureDelete,
    openUpdateComment,
    photoCOA,
    ref,
    textInfoCOA,
    userCreateComment,
    whatIsAOC,

    // metodos
    getReactionSelected,
    onDeleteComment,
    onGoToProfile,
    setOpenAnswers,
    setOpenListReactions,
    setOpenOptions,
    setOpenSureDelete,
    setOpenUpdateComment,
  } = useCardComment({ comment, users, infoUserActive, isCommentOrAnswer });

  const { countAnswers } = useAnswersComments({ comment, infoUserActive });

  return (
    <>
      <div className={styles.card_comment__container}>
        <figure className={styles.card_comment__photo} onClick={onGoToProfile}>
          <img
            src={userCreateComment?.photoUrl || photoUser}
            alt="Foto de perfil"
          />
        </figure>

        <div className={styles.card_comment__contain_name_info_comment}>
          <div className={styles.card_comment__name_comment}>
            <div className={styles.card_comment__name_elli}>
              <p onClick={onGoToProfile}>{userCreateComment?.displayName}</p>

              {isThisUserCreatedComment && (
                <i
                  className="fa-solid fa-ellipsis"
                  onClick={() => setOpenOptions(!openOptions)}
                ></i>
              )}

              {isThisUserCreatedComment && (
                <>
                  {openOptions && (
                    <div
                      className={styles.card_comment__options_elli}
                      ref={ref}
                    >
                      <p onClick={() => setOpenUpdateComment(true)}>Editar</p>
                      <p onClick={() => setOpenSureDelete(true)}>Eliminar</p>
                    </div>
                  )}
                </>
              )}
            </div>

            {textInfoCOA && (
              <span className={styles.card_comment__text_comment}>
                {textInfoCOA}
              </span>
            )}
          </div>

          {photoCOA && (
            <figure className={styles.card_comment__image_comment}>
              <img src={photoCOA} alt="Foto del comentario" />
            </figure>
          )}

          <div className={styles.card_comment__date_reaction_response}>
            <div className={styles.comment__content_spans}>
              <span>{getTimeAgo(comment.date)}</span>
              <span style={{ color: getReactionSelected?.textColor || "" }}>
                {getReactionSelected?.name || "Me gusta"}

                <ReactionsPost
                  idDocumentToSave={idDocumentCOA}
                  nameCollectionFirebase={
                    whatIsAOC ? "comments" : "answersComment"
                  }
                  reactionObjCollection={comment?.reactions}
                  styleShowAllContainer={styles.comments__container}
                  uidUserToSaveReaction={infoUserActive.uid}
                />
              </span>

              {whatIsAOC && (
                <span onClick={() => setOpenAnswers(true)}>Responder</span>
              )}
            </div>

            <ReactionsSvgCount
              post={comment}
              onOpenListReaction={() => setOpenListReactions(true)}
            />
          </div>

          {whatIsAOC && countAnswers !== 0 && !openAnswers && (
            <div
              className={styles.comments__show_quality_answers}
              onClick={() => setOpenAnswers(true)}
            >
              <i className="fa-solid fa-arrow-turn-up"></i>
              <p>{countAnswers} respuesta</p>
            </div>
          )}
        </div>
      </div>

      {whatIsAOC && openAnswers && (
        <AnswersComments
          comment={comment}
          infoUserActive={infoUserActive}
          userCreateComment={userCreateComment}
          users={users}
        />
      )}

      {openListReactions && (
        <ListReactions
          listReactionsUse={comment}
          setOpenListReactions={setOpenListReactions}
        />
      )}

      {openUpdateComment && (
        <EditComment
          idDocumentCOA={idDocumentCOA}
          setOpenUpdateComment={setOpenUpdateComment}
          textInfoCOA={textInfoCOA}
        />
      )}

      {openSureDelete && (
        <SureDelete
          confirmationMessage="¿Seguro que quieres borrar este comentario?"
          onClose={() => setOpenSureDelete(false)}
          onDelete={onDeleteComment}
        />
      )}
    </>
  );
};
