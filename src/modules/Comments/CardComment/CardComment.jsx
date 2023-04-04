import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { EditComment } from "../EditComment/EditComment";
import { firebaseDB } from "../../../services";
import { getTimeAgo } from "../../../helpers";
import { getWhatReactionSelected } from "../../../components/Posts/helpers";
import { photoUser } from "../../../assets";
import { ReactionsPost, SureDelete } from "../../../components";
import { ReactionsSvgCount } from "../Layout/ReactionsSvgCount";
import { useCloseModal } from "../../../hooks";

import styles from "./cardComment.module.css";
import { useCardComment } from "./useCardComment";

export const CardComment = ({ comment, users, infoUserActive }) => {
  const {
    // atributos
    isThisUserCreatedComment,
    openOptions,
    openSureDelete,
    openUpdateComment,
    ref,
    userCreateComment,

    // metodos
    getReactionSelected,
    onDeleteComment,
    onGoToProfile,
    setOpenOptions,
    setOpenSureDelete,
    setOpenUpdateComment,
  } = useCardComment({ comment, users, infoUserActive });

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

            {comment.comment && (
              <span className={styles.card_comment__text_comment}>
                {comment.comment}
              </span>
            )}
          </div>
          {comment.photoComment && (
            <figure className={styles.card_comment__image_comment}>
              <img src={comment.photoComment} alt="Foto del comentario" />
            </figure>
          )}

          <div className={styles.card_comment__date_reaction_response}>
            <div className={styles.comment__content_spans}>
              <span>{getTimeAgo(comment.date)}</span>
              <span style={{ color: getReactionSelected?.textColor || "" }}>
                {getReactionSelected?.name || "Me gusta"}

                <ReactionsPost
                  idDocumentToSave={comment.idComment}
                  nameCollectionFirebase="comments"
                  reactionObjCollection={comment?.reactions}
                  styleShowAllContainer={styles.comments__container}
                  uidUserToSaveReaction={infoUserActive.uid}
                />
              </span>
              <span>Responder</span>
            </div>
            <ReactionsSvgCount post={comment} />
          </div>
        </div>
      </div>

      {openUpdateComment && (
        <EditComment
          comment={comment}
          setOpenUpdateComment={setOpenUpdateComment}
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
