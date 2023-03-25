import { photoUser } from "../../../assets";

import styles from "./modalSentMessage.module.css";

export const ModalSentMessage = () => {
  return (
    <div className={styles.modal_message__container}>
      <div className={styles.modal_message__box}>
        <div className={styles.modal_message__box__title}>
          <button className={styles.modal_message__btnclose_modal}>X</button>
          <p>Enviar mensaje a Martin</p>
        </div>
        <div className={styles.modal_message__content_form_and_user}>
          <div className={styles.modal_message__user}>
            <figure className={styles.modal_message__user_figure}>
              <img src={photoUser} alt="Foto de perfil" />

              <i className="fa-solid fa-circle"></i>
            </figure>
            <p>Martin Elias</p>
          </div>
          <div className={styles.modal_message__box__form}>
            <textarea
              type="text"
              name="message"
              className={styles.modal_message__textarea}
              placeholder="Escribe un mensaje..."
            />
            <button className={styles.modal_message__button}>enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
