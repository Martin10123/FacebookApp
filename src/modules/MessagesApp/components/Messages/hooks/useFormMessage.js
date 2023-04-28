import { useRef, useState } from "react";
import { useAddMessage } from "../../../hook";
import { addPhotoToCloudinary } from "../../../../../helpers";

export const useFormMessage = ({ infoUserActive, userMessage }) => {
  const [messageForm, setMessageForm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
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
        setLoadingImage(true);

        fileMessage = await addPhotoToCloudinary(selectedImage);

        setLoadingImage(false);
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

  return {
    // Atributos
    isSending,
    loadingImage,
    messageForm,
    refFileMessage,
    selectedImage,

    // Metodos
    onChangeFile,
    onSentMessage,
    setMessageForm,
  };
};
