import { HistoryDesk } from "../../SelectTypeHistory/components/HistoryDesk";

import styles from "../page/imagesHistory.module.css";

export const ImagesHistoryDesk = ({ setOpenHistoryFile }) => {
  return (
    <HistoryDesk setOpenHistoryText={setOpenHistoryFile} typeOnBackPage="CHD">
      <div className={styles.image_history__btn_create_desk}>
        <button
          className={styles.image_history__btn_cancel}
          onClick={() => setOpenHistoryFile(false)}
        >
          Descartar
        </button>
        <button className={styles.image_history__btn_success}>
          Compartir en historia
        </button>
      </div>
    </HistoryDesk>
  );
};
