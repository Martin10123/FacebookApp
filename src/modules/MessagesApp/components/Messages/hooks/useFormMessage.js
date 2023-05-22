import { useRef, useState } from "react";
import { useAddMessage, useAddMessageGroup } from "../../../hook";
import { addPhotoToCloudinary } from "../../../../../helpers";

export const useFormMessage = ({ infoUserActive, userMessage, isWindown }) => {
  const [messageForm, setMessageForm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const refFileMessage = useRef(null);

  const { isSending, onSendMessage } = useAddMessage();
  const { isLoadingGroup, onSendMessageGroup } = useAddMessageGroup();
  const isUserInChat = !userMessage?.usersDelete?.includes(infoUserActive.uid);

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

      userMessage?.isGroup
        ? await onSendMessageGroup({
            groupSelect: userMessage,
            infoUserActive,
            messageGroup: messageForm,
            photoMessageGroup: fileMessage,
          })
        : await onSendMessage({
            infoUserActive,
            message: messageForm,
            photoMessage: fileMessage,
            userSelected: userMessage,
            isWindown,
          });

      setMessageForm("");
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // Atributos
    isSending: userMessage?.isGroup ? isLoadingGroup : isSending,
    isUserInChat,
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
