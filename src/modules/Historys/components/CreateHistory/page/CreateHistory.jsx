import {
  CreateHistoryDesk,
  CreateHistoryMobile,
  CreateHistoryPreview,
} from "../components";
import { useCreateHistory } from "../../hooks";

import styles from "./createHistory.module.css";

export const CreateHistory = ({ infoUserActive, setOpenHistoryText }) => {
  const {
    // Atributos
    selectColor,
    startLoading,
    styleColorBack,
    textHistory,

    // Metodos
    onSaveHistory,
    setSelectColor,
    setTextHistory,
  } = useCreateHistory({ infoUserActive, setOpenHistoryText });

  return (
    <div className={styles.create_history__container}>
      <div className={styles.create_history__box_create_text_history}>
        <CreateHistoryMobile
          onSaveHistory={onSaveHistory}
          selectColor={selectColor}
          setOpenHistoryText={setOpenHistoryText}
          setSelectColor={setSelectColor}
          setTextHistory={setTextHistory}
          startLoading={startLoading}
          styleColorBack={styleColorBack}
          textHistory={textHistory}
        />

        <CreateHistoryDesk
          infoUserActive={infoUserActive}
          onSaveHistory={onSaveHistory}
          setOpenHistoryText={setOpenHistoryText}
          setSelectColor={setSelectColor}
          setTextHistory={setTextHistory}
          startLoading={startLoading}
          textHistory={textHistory}
        />

        <CreateHistoryPreview>
          <div
            className={styles.create_preview__text_preview}
            style={styleColorBack}
          >
            <p className={styles.create_preview__text}>
              {textHistory || "Empieza a escribir"}
            </p>
          </div>
        </CreateHistoryPreview>
      </div>
    </div>
  );
};
