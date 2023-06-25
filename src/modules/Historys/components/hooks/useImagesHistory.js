import { useContext, useRef, useState } from "react";
import { addPhotoToCloudinary } from "../../../../helpers";
import { doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../services";
import { ContextListImagesContext } from "../ImagesHistory/context/ContextListImages";
import { useKnowIfDeskOMobile } from "../../../../hooks";

export const useImagesHistory = ({ infoUserActive }) => {
  const { onFileInputchange, selectImage, setOpenHistoryFile, setSelectImage } =
    useContext(ContextListImagesContext);
  const [startLoading, setStartLoading] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const isMobile = useKnowIfDeskOMobile();
  const refFile = useRef();

  const onDeleteImageSelect = (name) => {
    if (startLoading) return;

    setSelectImage(
      Object.values(selectImage).filter((image) => image.name !== name)
    );
  };

  const onCloseModal = () => {
    setSelectImage([]);

    setOpenHistoryFile(false);
  };

  const startUpdaloadingFiles = async () => {
    try {
      const fileUploadPromises = [];

      for (const file of selectImage) {
        fileUploadPromises.push(addPhotoToCloudinary(file));
      }

      const photosUrls = await Promise.all(fileUploadPromises);

      return photosUrls;
    } catch (error) {
      console.error(error);
    }
  };

  const onSaveHistory = async () => {
    if (selectImage.length === 0) return;

    setStartLoading(true);

    const photosUrl = await startUpdaloadingFiles();

    for (const pathUrl of photosUrl) {
      const generateId =
        infoUserActive.username +
        new Date().getTime() +
        Math.random(Math.round() * 1000);

      const privacityHistories = {
        canSentMessage:
          infoUserActive?.privacityHistories?.whoCanSentMessage || "Publico",
        typePrivacityHistory:
          infoUserActive?.privacityHistories?.whoCanSeeHistory ||
          "Enviar mensajes",
      };

      try {
        await setDoc(
          doc(firebaseDB, "stories", infoUserActive.uid),
          {
            ["histories"]: {
              [generateId]: {
                canSentMessage: privacityHistories.canSentMessage,
                date: new Date().getTime(),
                idStorieCreate: generateId,
                pathUrl,
                typePrivacityHistory: privacityHistories.typePrivacityHistory,
                uidUser: infoUserActive.uid,
                whoHaveSeenHistory: [],
              },
            },
          },
          { merge: true }
        );

        setOpenHistoryFile(false);
      } catch (error) {
        console.error(error);
      } finally {
        setStartLoading(false);
      }
    }
  };

  return {
    // Atributos
    isMobile,
    onFileInputchange,
    openSettings,
    refFile,
    selectImage,
    startLoading,

    // Metodos
    onCloseModal,
    onDeleteImageSelect,
    onSaveHistory,
    setOpenSettings,
  };
};
