import { useState } from "react";

import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";
import { CreateHistory, ImagesHistory } from "..";
import { usePreventScroll } from "../../../../hooks";

import styles from "./selectTypeHistory.module.css";

export const SelectTypeHistory = ({
  infoUserActive,
  setOpenSelectTypeHistory,
}) => {
  usePreventScroll();
  const [openHistoryText, setOpenHistoryText] = useState(false);
  const [openHistoryImage, setOpenHistoryImage] = useState(false);

  return (
    <>
      <LayoutCreateHistory
        noCreateName="Crear historia"
        onCloseModal={() => setOpenSelectTypeHistory(false)}
        style={{ background: "#fff", color: "#000" }}
      >
        <div className={styles.select_history__options}>
          <div
            className={styles.select_history__item}
            onClick={() => setOpenHistoryText(true)}
          >
            <div className={styles.select_history__icon}>
              <p>Aa</p>
            </div>
            <p>Texto</p>
          </div>
          <div
            className={styles.select_history__item}
            onClick={() => setOpenHistoryImage(true)}
          >
            <div className={styles.select_history__icon}>
              <i className="fa-solid fa-image"></i>
            </div>
            <p>Seleccionar una</p>
          </div>
        </div>
      </LayoutCreateHistory>

      {openHistoryText && (
        <CreateHistory
          infoUserActive={infoUserActive}
          setOpenHistoryText={setOpenHistoryText}
        />
      )}

      {openHistoryImage && (
        <ImagesHistory
          infoUserActive={infoUserActive}
          setOpenHistoryImage={setOpenHistoryImage}
        />
      )}
    </>
  );
};
