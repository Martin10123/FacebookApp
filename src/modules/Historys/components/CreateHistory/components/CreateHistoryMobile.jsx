import { useState } from "react";
import { ColorsGradients } from "./ColorsGradients";

import styles from "../page/createHistory.module.css";

export const CreateHistoryMobile = ({ setOpenHistoryText }) => {
  const [openColors, setOpenColors] = useState(false);

  const autoResize = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <div className={styles.create_history__content}>
      <div className={styles.create_history__nav}>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setOpenHistoryText(false)}
        ></i>

        <button className={styles.create_history__btn_create}>Listo</button>
      </div>

      <div className={styles.create_history__write_text}>
        <textarea
          className={styles.create_history__textarea}
          onInput={autoResize}
          placeholder="Empieza a escribir"
        />
      </div>

      <div className={styles.create_history__content_colors}>
        <div
          className={styles.create_history__select_colors}
          onClick={() => setOpenColors(!openColors)}
        ></div>
        {openColors && <ColorsGradients />}
      </div>
    </div>
  );
};
