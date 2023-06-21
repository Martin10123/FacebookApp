import { photoUser } from "../../../../../assets";
import {
  SeeReactionsHistories,
  InfoUserSeeHistory,
  ListReactionsHistory,
  SeeHistoryDesk,
} from "../components";

import styles from "./seeHistory.module.css";

export const SeeHistory = () => {
  return (
    <div className={styles.see_history__container}>
      <div className={styles.see_history__content_mobile_desk}>
        <SeeHistoryDesk />

        <div className={styles.see_history__info_histories_posted}>
          <div className={styles.see_history__content}>
            <InfoUserSeeHistory />

            <div className={styles.see_history__image_history}>
              <figure className={styles.see_history__content_photo}>
                <img src={photoUser} alt="Foto de la historia" />
              </figure>
            </div>

            <SeeReactionsHistories />
          </div>

          <div>
            <ListReactionsHistory />
          </div>

          <div className={styles.see_history__content_arrow_next_preview}>
            <div className={styles.see_history__next}>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className={styles.see_history__preview}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
