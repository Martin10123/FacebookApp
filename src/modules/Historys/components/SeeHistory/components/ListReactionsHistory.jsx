import { reactionsDataPost } from "../../../../../components/Posts/helpers";
import { WhoViewMyHistory } from "../../WhoViewMyHistory/WhoViewMyHistory";
import { ModalSentMessage } from "../../../../MessagesApp";
import { useListReactionsHistory } from "../../hooks";

import styles from "./stylesComponents.module.css";

export const ListReactionsHistory = ({
  isTheSameUser,
  numStorie,
  storieSelectPage,
  userStorie,
}) => {
  const {
    // Atributos
    openMessageModal,
    openViewStorie,
    reactionStorie,

    // Metodos
    onReactionStorie,
    setOpenMessageModal,
    setOpenViewStorie,
  } = useListReactionsHistory({
    numStorie,
    storieSelectPage,
    userStorie,
  });

  return (
    <>
      <div className={styles.see_history__comment_reaction}>
        <div
          className={styles.see_history__see_count_users_have_seen_your_storie}
          onClick={() => setOpenViewStorie(true)}
        >
          <i className="fa-regular fa-eye"></i>
          <p>{storieSelectPage?.whoHaveSeenHistory?.length || 0}</p>
        </div>

        {!isTheSameUser && (
          <div
            className={styles.see_history__message}
            onClick={() => setOpenMessageModal(true)}
          >
            <i className="fa-brands fa-facebook-messenger"></i>
            <p>Enviar mensaje...</p>
          </div>
        )}

        {!isTheSameUser && (
          <div className={styles.see_history__list_emojis}>
            {reactionsDataPost.map(({ name, img, tofire }) => (
              <img
                alt={name}
                className={styles.see_history__reaction_emoji}
                key={name}
                src={img}
                onClick={() =>
                  onReactionStorie({
                    typeReaction: tofire,
                    dateReaction: new Date().getTime() * Math.random(),
                  })
                }
              />
            ))}
          </div>
        )}
      </div>

      {reactionStorie.length !== 0 && (
        <div className={styles.see_history__show_reaction_preview}>
          {reactionsDataPost.map(({ name, img, tofire }) =>
            reactionStorie
              .slice(-5)
              .map(
                ({ typeReaction, dateReaction }) =>
                  typeReaction === tofire && (
                    <img
                      alt={name}
                      className={styles.see_history__reaction_emoji}
                      key={dateReaction}
                      src={img}
                    />
                  )
              )
          )}
        </div>
      )}

      {openViewStorie && (
        <WhoViewMyHistory
          listUsersWhoViewStorie={storieSelectPage.whoHaveSeenHistory}
          setOpenViewStorie={setOpenViewStorie}
        />
      )}

      {openMessageModal && (
        <ModalSentMessage
          matchedUser={userStorie}
          messagePrede=""
          setOpenMessange={setOpenMessageModal}
        />
      )}
    </>
  );
};
