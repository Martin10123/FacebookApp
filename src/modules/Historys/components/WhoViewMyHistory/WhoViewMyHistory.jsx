import { useContext } from "react";
import { photoUser } from "../../../../assets";
import { AuthUserContext } from "../../../../context";

import styles from "./whoViewMyHistory.module.css";

export const WhoViewMyHistory = ({
  listUsersWhoViewStorie,
  setOpenViewStorie,
}) => {
  const { users } = useContext(AuthUserContext);

  const usersViewStorie = users.filter((user) =>
    listUsersWhoViewStorie.includes(user.uid)
  );

  return (
    <div className={styles.who_view__container}>
      <div className={styles.who_view__nav}>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setOpenViewStorie(false)}
        ></i>
      </div>

      <div className={styles.who_view__list_users}>
        {usersViewStorie.map((user) => (
          <figure className={styles.who_view__photo} key={user.uid}>
            <img
              src={user.photoUrl || photoUser}
              alt="Foto de perfil usuario"
            />
            <figcaption>{user.displayName}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
