import { useState } from "react";
import { reactionsDataPost } from "../../../../../components/Posts/helpers";
import { WhoViewMyHistory } from "../../WhoViewMyHistory/WhoViewMyHistory";
import { ModalSentMessage } from "../../../../MessagesApp";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../../services";

import styles from "./stylesComponents.module.css";
import { useEffect } from "react";

export const ListReactionsHistory = ({
  isTheSameUser,
  storieSelectPage,
  userStorie,
}) => {
  const [openViewStorie, setOpenViewStorie] = useState(false);
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [reactionStorie, setReactionStorie] = useState([]);

  useEffect(() => {
    setReactionStorie([...(storieSelectPage?.reactionStorie || [])]);
  }, [storieSelectPage]);

  const onReactionStorie = async ({ typeReaction, dateReaction }) => {
    setReactionStorie([
      ...reactionStorie,
      {
        typeReaction,
        dateReaction,
      },
    ]);

    try {
      await setDoc(
        doc(firebaseDB, "stories", storieSelectPage.uidUser),
        {
          ["histories"]: {
            [storieSelectPage.idStorieCreate]: {
              reactionStorie: arrayUnion({
                typeReaction,
                dateReaction,
              }),
            },
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.error(error);
    }
  };

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
