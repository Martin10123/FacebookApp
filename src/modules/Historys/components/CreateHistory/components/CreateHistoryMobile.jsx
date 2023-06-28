import { useState } from "react";
import { ColorsGradients } from "./ColorsGradients";

import styles from "../page/createHistory.module.css";

export const CreateHistoryMobile = ({
  onSaveHistory,
  setOpenHistoryText,
  setSelectColor,
  setTextHistory,
  startLoading,
  styleColorBack,
  textHistory,
}) => {
  const [openColors, setOpenColors] = useState(false);

  const autoResize = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <div className={styles.create_history__content} style={styleColorBack}>
      <div className={styles.create_history__nav}>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setOpenHistoryText(false)}
        ></i>

        <button
          className={styles.create_history__btn_create}
          onClick={onSaveHistory}
          style={startLoading ? { width: "40%" } : {}}
        >
          {startLoading ? "Compartiendo..." : "Listo"}
        </button>
      </div>

      <div className={styles.create_history__write_text}>
        <textarea
          className={styles.create_history__textarea}
          maxLength={300}
          onChange={({ target }) => setTextHistory(target.value)}
          onInput={autoResize}
          placeholder="Empieza a escribir"
          value={textHistory}
        />
      </div>

      <div className={styles.create_history__content_colors}>
        <div
          className={styles.create_history__select_colors}
          onClick={() => setOpenColors(!openColors)}
          style={styleColorBack}
        ></div>

        {openColors && <ColorsGradients setSelectColor={setSelectColor} />}
      </div>
    </div>
  );
};
