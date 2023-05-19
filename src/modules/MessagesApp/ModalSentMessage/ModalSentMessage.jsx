import { useContext, useState } from "react";
import { photoUser } from "../../../assets";
import { AuthUserContext } from "../../../context";
import { useCloseModal, usePreventScroll } from "../../../hooks";
import { useAddMessage } from "../hook";

import styles from "./modalSentMessage.module.css";

export const ModalSentMessage = ({
  matchedUser,
  messagePrede,
  setOpenMessange,
}) => {
  usePreventScroll();

  const { infoUserActive } = useContext(AuthUserContext);
  const [message, setMessage] = useState(messagePrede || "");
  const { isSending, onSendMessage } = useAddMessage();
  const refModal = useCloseModal(() => setOpenMessange(false));

  const onSentMessageModal = async () => {
    if (message.trim().length === 0) return;

    try {
      await onSendMessage({
        infoUserActive,
        message,
        userSelected: matchedUser,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.modal_message__container}>
      <div className={styles.modal_message__box} ref={refModal}>
        <div className={styles.modal_message__box__title}>
          <button
            className={styles.modal_message__btnclose_modal}
            disabled={isSending}
            onClick={() => setOpenMessange(false)}
          >
            X
          </button>
          <p>
            {isSending ? "Enviando" : "Enviar"} mensaje a{" "}
            {matchedUser.displayName}
          </p>
        </div>
        <div className={styles.modal_message__content_form_and_user}>
          <div className={styles.modal_message__user}>
            <figure className={styles.modal_message__user_figure}>
              <img
                src={infoUserActive?.photoUrl || photoUser}
                alt="Foto de perfil"
              />

              <i className="fa-solid fa-circle"></i>
            </figure>
            <p>{infoUserActive.displayName}</p>
          </div>
          <div className={styles.modal_message__box__form}>
            <textarea
              className={styles.modal_message__textarea}
              name="message"
              onChange={({ target }) => setMessage(target.value)}
              placeholder="Escribe un mensaje..."
              type="text"
              value={message}
            />
            <button
              className={styles.modal_message__button}
              disabled={isSending}
              onClick={onSentMessageModal}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
