import { EditDetailsItem } from "../../components";

import styles from "./detailsUser.module.css";

export const DetailsUser = ({
  isUserActive,
  matchedUser,
  setOpenEditProfile,
}) => {
  return (
    <>
      <div className={styles.profile__info_details}>
        <div className={styles.profile__titles_post}>
          <p>Posts</p>
        </div>

        <h3 className={styles.title_details}>Detalles</h3>

        <ul className={styles.profile__list_details}>
          <EditDetailsItem matchedUser={matchedUser} />

          <button
            className={styles.profile__edit_public_details}
            onClick={() => setOpenEditProfile(true)}
          >
            {isUserActive ? "Editar detalles" : "Ver detalles"}
          </button>
        </ul>
      </div>
    </>
  );
};
