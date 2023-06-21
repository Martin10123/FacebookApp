import {
  CreateHistoryDesk,
  CreateHistoryMobile,
  CreateHistoryPreview,
} from "../components";

import styles from "./createHistory.module.css";

export const CreateHistory = ({ infoUserActive, setOpenHistoryText }) => {
  return (
    <div className={styles.create_history__container}>
      <div className={styles.create_history__box_create_text_history}>
        <CreateHistoryMobile setOpenHistoryText={setOpenHistoryText} />

        <CreateHistoryDesk setOpenHistoryText={setOpenHistoryText} />

        <CreateHistoryPreview>
          <div className={styles.create_preview__text_preview}>
            <p className={styles.create_preview__text}>Empieza a escribir</p>
          </div>
        </CreateHistoryPreview>
      </div>
    </div>
  );
};
