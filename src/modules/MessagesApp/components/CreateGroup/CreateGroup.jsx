import { photoUser } from "../../../../assets";
import { ButtonForm } from "../../../Auth";

import styles from "./createGroup.module.css";

export const CreateGroup = ({ setOpenCreateGroup }) => {
  return (
    <div className={styles.create_group__container}>
      <div className={styles.create_group__content}>
        <div className={styles.create_group__nav}>
          <p>Crear grupo</p>
          <button
            className={styles.create_group__btn_close}
            onClick={() => setOpenCreateGroup(false)}
          >
            X
          </button>
        </div>

        <ul className={styles.create_group__list_users}>
          <li className={styles.create_group__li_user}>
            <figure className={styles.create_group__photo_user}>
              <img src={photoUser} alt="" />
              <i className="fa-solid fa-circle"></i>
              <figcaption>Martin Elias</figcaption>
            </figure>

            <input
              className={styles.create_group__checkbox}
              type="checkbox"
              name=""
              id=""
            />
          </li>
        </ul>

        <div className={styles.create_group__content_buttons}>
          <ButtonForm title="Crear" />
        </div>
      </div>
    </div>
  );
};
