import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { photoUser } from "../../../assets";
import { getSearchUsers } from "../searchUser";

import styles from "./autoComplete.module.css";

export const AutoComplete = ({ onResetForm, searchFriend, users }) => {
  const listUsers = useMemo(
    () => getSearchUsers(users, searchFriend),
    [searchFriend]
  );

  const navigate = useNavigate();

  const onGoToProfile = (username) => {
    navigate(`/${username}`);
    onResetForm();
  };

  return (
    <div className={styles.auto__container}>
      <ul className={styles.auto__content_list}>
        {listUsers.map((user) => (
          <li key={user.uid} className={styles.auto__li_item}>
            <figure
              className={styles.auto__user_info}
              onClick={() => onGoToProfile(user.username)}
            >
              <img
                src={user.photoUrl || photoUser}
                alt={`Foto de ${user.displayName}`}
              />
              <figcaption>{user.displayName}</figcaption>
            </figure>
            <i className="fa-solid fa-circle-xmark"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};
