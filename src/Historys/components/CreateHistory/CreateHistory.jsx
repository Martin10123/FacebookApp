import { useState } from "react";
import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";
import { ColorsGradients } from "./ColorsGradients";
import styles from "./createHistory.module.css";

export const CreateHistory = () => {
  const [openColors, setOpenColors] = useState(false);

  return (
    <>
      <LayoutCreateHistory isCreate={true}>
        <div className={styles.create_history__write_history}>
          <textarea name="" id="" placeholder="Escribir historia..." />
        </div>

        <div className={styles.create_history__select_color_type_text}>
          <div
            className={styles.create_history__color_back}
            onClick={() => setOpenColors(true)}
          ></div>
          <div className={styles.create_history__type_text}>
            <p>Normal</p>
          </div>
        </div>
      </LayoutCreateHistory>

      {openColors && <ColorsGradients setOpenColors={setOpenColors} />}
    </>
  );
};
