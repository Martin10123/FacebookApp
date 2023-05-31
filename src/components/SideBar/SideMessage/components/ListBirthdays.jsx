import { ButtonForm } from "../../../../modules/Auth";
import styles from "../sideMessage.module.css";

export const ListBirthdays = ({
  setOpenBirthdays,
  usersWhoBirthdayIsClose,
}) => {
  return (
    <div className={styles.sideMessage__windown_events}>
      <h3>
        <i className="fa-solid fa-cake-candles"></i>
        Cumpleaños cercanos
      </h3>
      {usersWhoBirthdayIsClose.slice(0, 2).map(
        (userBirthday) =>
          userBirthday.daysLeft >= 0 && (
            <div
              className={styles.sideMessage__info_card_events}
              key={userBirthday.uid}
            >
              <p>{userBirthday.displayName}</p>
              <span>
                {userBirthday.birthday} ({userBirthday.daysLeft} dias)
              </span>
            </div>
          )
      )}

      <ButtonForm
        title="Ver más..."
        stylesButton={{ height: "2.5rem", fontSize: "1rem" }}
        onSubmit={() => setOpenBirthdays(true)}
      />
    </div>
  );
};
