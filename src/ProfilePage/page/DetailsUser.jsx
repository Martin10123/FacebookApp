import { useState } from "react";
import { EditProfile } from "../components";

import styles from "./profile.module.css";

export const DetailsUser = () => {
  const [openEditProfile, setOpenEditProfile] = useState(false);

  return (
    <>
      <div className={styles.profile__info_details}>
        <div className={styles.profile__titles_post}>
          <p>Posts</p>
        </div>

        <h3 className={styles.title_details}>Detalles</h3>

        <ul className={styles.profile__list_details}>
          <li className={styles.profile__list_item}>
            <i className="fa-solid fa-briefcase"></i>
            No trabajo mis padres me mantiene
          </li>
          <li className={styles.profile__list_item}>
            <i className="fa-solid fa-briefcase"></i>
            No trabajo mis padres me mantiene
          </li>
          <button
            className={styles.profile__edit_public_details}
            onClick={() => setOpenEditProfile(true)}
          >
            Editar detalles
          </button>
        </ul>
      </div>
      {openEditProfile && (
        <EditProfile setOpenEditProfile={setOpenEditProfile} />
      )}
    </>
  );
};
