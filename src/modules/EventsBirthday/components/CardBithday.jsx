import { photoUser } from "../../../assets";
import { ButtonForm } from "../../Auth";

import styles from "../eventsBirthday.module.css";

export const CardBithday = ({ userBirthday, onSelectUserBithday }) => {
  return (
    <div className={styles.events__user_item}>
      <figure className={styles.events__user_photo}>
        <img
          src={userBirthday.photoUrl || photoUser}
          alt="Foto de perfil del usuario"
        />
        <figcaption className={styles.events__user_info}>
          <p>{userBirthday.displayName}</p>
          <span>
            {userBirthday.birthday} ({userBirthday.daysLeft} dias)
          </span>
        </figcaption>
      </figure>

      {(userBirthday.daysLeft === 1 || userBirthday.daysLeft === 0) && (
        <ButtonForm
          onSubmit={() => onSelectUserBithday(userBirthday)}
          title="Mensaje"
        />
      )}
    </div>
  );
};
