import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { addPhotoToCloudinary } from "../../../../../helpers";
import { HistoryDesk } from "../../SelectTypeHistory/components/HistoryDesk";
import { firebaseDB } from "../../../../../services";

import styles from "../page/imagesHistory.module.css";

export const ImagesHistoryDesk = ({
  infoUserActive,
  setOpenHistoryFile,
  selectImage,
}) => {
  const [startLoading, setStartLoading] = useState(false);

  const onSaveHistory = async () => {
    if (selectImage.length === 0) return;

    setStartLoading(true);

    const photoUrl = await addPhotoToCloudinary(selectImage[0]);

    const generateId =
      infoUserActive.username +
      new Date().getTime() +
      Math.random(Math.round() * 1000);

    try {
      await setDoc(
        doc(firebaseDB, "stories", infoUserActive.uid),
        {
          ["histories"]: {
            [generateId]: {
              canSentMessage:
                infoUserActive?.privacityHistories.whoCanSentMessage,
              date: new Date().getTime(),
              photoUrl,
              typePrivacityHistory:
                infoUserActive?.privacityHistories.whoCanSeeHistory,
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
  };

  return (
    <HistoryDesk
      displayNameUser={infoUserActive.displayName}
      setOpenHistoryText={setOpenHistoryFile}
      typeOnBackPage="CHD"
    >
      <div className={styles.image_history__btn_create_desk}>
        <button
          className={styles.image_history__btn_cancel}
          onClick={() => setOpenHistoryFile(false)}
        >
          Descartar
        </button>
        <button
          className={styles.image_history__btn_success}
          onClick={onSaveHistory}
        >
          {startLoading ? "Compartiendo..." : "Compartir en historia"}
        </button>
      </div>
    </HistoryDesk>
  );
};
