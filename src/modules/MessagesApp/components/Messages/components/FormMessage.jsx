import { useRef, useState } from "react";

import { addPhotoToCloudinary } from "../../../../../helpers";
import { useAddMessage } from "../../../hook";

import styles from "./componentsStyles.module.css";

export const FormMessage = ({ infoUserActive, userMessage }) => {
  const [messageForm, setMessageForm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const refFileMessage = useRef(null);

  const { isSending, onSendMessage } = useAddMessage();

  const onChangeFile = ({ target }) => {
    if (target.files.length === 0) return;

    setSelectedImage(target.files[0]);
  };

  const onSentMessage = async (e) => {
    e.preventDefault();

    if (messageForm.trim().length === 0 && !selectedImage) return;

    try {
      let fileMessage;

      if (selectedImage) {
        fileMessage = await addPhotoToCloudinary(selectedImage);
      }

      await onSendMessage({
        infoUserActive,
        message: messageForm,
        photoMessage: fileMessage,
        userSelected: userMessage,
      });

      setMessageForm("");
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.message__form_message}>
      <div className={styles.message__input_form}>
        <i
          className="fa-solid fa-camera"
          onClick={() => refFileMessage.current.click()}
        ></i>

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
  );
};
