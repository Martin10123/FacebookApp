import { Link } from "react-router-dom";
import { photoUser } from "../../../../assets";
import { getTimeAgo } from "../../../../helpers";
import {
  AnswersComments,
  ListReactions,
  EditComment,
  ReactionsSvgCount,
} from "..";
import { ReactionsPost, SureDelete } from "../../../../components";
import { useCardComment } from "../../hooks";

import styles from "./cardComment.module.css";

export const CardComment = ({
  infoCOA,
  infoUserActive,
  onDeleteCOA,
  users,
  whatIsAOC,
}) => {
  const {
    filterAnswersByComment,
    getReactionSelected,
    isCOA,
    isThisUserCreatedComment,
    openAnswers,
    openListReactions,
    openOptionsCOA,
    openSureDelete,
    openUpdateCOA,
    refOptions,
    setOpenAnswers,
    setOpenListReactions,
    setOpenOptionsCOA,
    setOpenSureDelete,
    setOpenUpdateCOA,
    startLoadingAnswers,
    userCreateCOA,
  } = useCardComment({ infoCOA, infoUserActive, whatIsAOC, users });

  return (
    <>
      <div className={styles.card_comment__containerCOA}>
        <Link to={`/${userCreateCOA?.username}`}>
          <figure className={styles.card_comment__photo}>
            <img
              src={userCreateCOA?.photoUrl || photoUser}
              alt="Foto de perfil"
            />
          </figure>
        </Link>

        <div className={styles.card_comment__contain_name_info_comment}>
          <div className={styles.card_comment__name_comment}>
            <div className={styles.card_comment__name_elli}>
              <Link to={`/${userCreateCOA?.username}`}>
                {userCreateCOA.displayName}
              </Link>

              {isThisUserCreatedComment && (
                <>
                  <i
                    className="fa-solid fa-ellipsis"
                    onClick={() => setOpenOptionsCOA(!openOptionsCOA)}
                  ></i>

                  {openOptionsCOA && (
                    <div
                      className={styles.card_comment__options_elli}
                      ref={refOptions}
                    >
                      <p onClick={() => setOpenUpdateCOA(true)}>Editar</p>
                      <p onClick={() => setOpenSureDelete(true)}>Eliminar</p>
                    </div>
                  )}
                </>
              )}
            </div>

            {infoCOA.textCOA && (
              <span className={styles.card_comment__text_comment}>
                {infoCOA.textCOA}
              </span>
            )}
          </div>

          {infoCOA.photoCOA && (
            <figure className={styles.card_comment__image_comment}>
              <img src={infoCOA.photoCOA} alt="Foto del comentario" />
            </figure>
          )}

          <div className={styles.card_comment__date_reaction_response}>
            <div className={styles.card_comment__content_spans}>
              <span>{getTimeAgo(infoCOA.date)}</span>
              <span style={{ color: getReactionSelected?.textColor || "" }}>
                {getReactionSelected?.name || "Me gusta"}
                <ReactionsPost
                  idDocumentToSave={
                    isCOA ? infoCOA.idComment : infoCOA.idAnswer
                  }
                  nameCollectionFirebase={isCOA ? "comments" : "answers"}
                  reactionObjCollection={infoCOA?.reactions}
                  styleShowAllContainer={styles.card_comment__container}
                  uidUserCreatePost={infoCOA.uidUser}
                  uidUserToSaveReaction={infoUserActive.uid}
                />
              </span>

              {isCOA && (
                <span onClick={() => setOpenAnswers(true)}>Responder</span>
              )}
            </div>

            <ReactionsSvgCount
              onOpenListReaction={() => setOpenListReactions(true)}
              post={infoCOA}
            />
          </div>

          {isCOA && filterAnswersByComment.length !== 0 && !openAnswers && (
            <div
              className={styles.card_comment__show_quality_answers}
              onClick={() => setOpenAnswers(true)}
            >
              <i className="fa-solid fa-arrow-turn-up"></i>
              <p>{filterAnswersByComment.length} respuesta</p>
            </div>
          )}
        </div>
      </div>

      {isCOA && openAnswers && (
        <AnswersComments
          comment={infoCOA}
          filterAnswersByComment={filterAnswersByComment}
          infoUserActive={infoUserActive}
          startLoadingAnswers={startLoadingAnswers}
          users={users}
        />
      )}

      {openListReactions && (
        <ListReactions
          listReactionsUse={infoCOA}
          setOpenListReactions={setOpenListReactions}
        />
      )}

      {openUpdateCOA && (
        <EditComment
          idDocumentToSave={isCOA ? infoCOA.idComment : infoCOA.idAnswer}
          pahtToSaveFire={isCOA ? "comments" : "answers"}
          setOpenUpdateComment={setOpenUpdateCOA}
          textInfoCOA={infoCOA.textCOA}
        />
      )}

      {openSureDelete && (
        <SureDelete
          confirmationMessage="¿Seguro que quieres borrar este comentario?"
          onClose={() => setOpenSureDelete(false)}
          onDelete={() =>
            onDeleteCOA(isCOA ? infoCOA.idComment : infoCOA.idAnswer)
          }
        />
      )}
    </>
  );
};
