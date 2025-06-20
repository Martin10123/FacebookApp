import { useFormMessage } from "../../hooks/useFormMessage";

import styles from "./formMessage.module.css";

export const FormMessage = ({ infoUserActive, userMessage, isWindown }) => {
  const {
    // Atributos
    isSending,
    isUserInChat,
    loadingImage,
    messageForm,
    refFileMessage,
    selectedImage,

    // Metodos
    onChangeFile,
    onSentMessage,
    setMessageForm,
  } = useFormMessage({ infoUserActive, userMessage, isWindown });

  return (
    <>
      {isUserInChat ? (
        <form className={styles.message__form_message}>
          <div className={styles.message__input_form}>
            <i
              className="fa-solid fa-camera"
              onClick={() => refFileMessage.current.click()}
            ></i>

            {selectedImage && (
              <p className={styles.message__count_images}>
                {loadingImage ? (
                  "Cargando imagen..."
                ) : (
                  <>
                    1<i className="fa-solid fa-camera"></i>
                  </>
                )}
              </p>
            )}

            <input
              onChange={onChangeFile}
              ref={refFileMessage}
              style={{ display: "none" }}
              type="file"
            />

            <input
              autoComplete="off"
              onChange={({ target }) => setMessageForm(target.value)}
              placeholder="Mensaje..."
              type="text"
              value={messageForm}
            />
          </div>

          <button
            className={styles.message__btn_send_message}
            disabled={isSending}
            onClick={onSentMessage}
            type="submit"
          >
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      ) : (
        <div className={styles.message__not_user_in_group}>
          <p>Ya no eres miembro de este grupo</p>
        </div>
      )}
    </>
  );
};
