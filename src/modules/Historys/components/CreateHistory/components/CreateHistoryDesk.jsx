import { HistoryDesk } from "../../SelectTypeHistory/components/HistoryDesk";
import { ColorsGradients } from "./ColorsGradients";

import styles from "../page/createHistory.module.css";

export const CreateHistoryDesk = ({ setOpenHistoryText }) => {
  return (
    <HistoryDesk setOpenHistoryText={setOpenHistoryText} typeOnBackPage="CHD">
      <div className={styles.create_history__write_text_desk}>
        <div className={styles.create_history__textarea_write}>
          <textarea placeholder="Empieza a escribir" />
        </div>

        <div className={styles.create_history__select_color}>
          <h4>Fondos</h4>

          <div className={styles.create_history__list_colors}>
            <ColorsGradients />
          </div>
        </div>

        <div className={styles.create_history__btn_create_desk}>
          <button
            className={styles.create_history__btn_cancel}
            onClick={() => setOpenHistoryText(false)}
          >
            Descartar
          </button>
          <button className={styles.create_history__btn_success}>
            Compartir en historia
          </button>
        </div>
      </div>
    </HistoryDesk>
  );
};
