import { useAddMessage } from "../../../../MessagesApp/hook";
import { ListReactionsHistory } from "./ListReactionsHistory";

import styles from "./stylesComponents.module.css";

export const ListMessagesPrede = ({
  infoUserActive,
  isTheSameUser,
  storieSelectPage,
  userStorie,
}) => {
  const { isSending, onSendMessage } = useAddMessage();

  const sentAnswerStorie = async (message) => {
    try {
      await onSendMessage({
        infoUserActive,
        message: `Respondio a tu historia con: ${message}`,
        userSelected: userStorie,
        isWindown: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  77;

  return (
    <div className={styles.see_history__reactions_message_history}>
      {!isTheSameUser && (
        <div className={styles.see_history__messages_default}>
          {!isSending && (
            <>
              <p onClick={() => sentAnswerStorie("Guau, increíble")}>
                Guau, increíble
              </p>
              <p onClick={() => sentAnswerStorie("Es hermos@")}>Es hermos@</p>
              <p onClick={() => sentAnswerStorie("Increible paisaje")}>
                Increible paisaje
              </p>
              <p onClick={() => sentAnswerStorie("Excelente")}>Excelente</p>
              <p onClick={() => sentAnswerStorie("❤️❤️❤️")}>❤️❤️❤️</p>
            </>
          )}

          {isSending && <p>Enviando...</p>}
        </div>
      )}

      <div className={styles.see_history__show_reactions_history}>
        <ListReactionsHistory
          isTheSameUser={isTheSameUser}
          storieSelectPage={storieSelectPage}
          userStorie={userStorie}
        />
      </div>
    </div>
  );
};
