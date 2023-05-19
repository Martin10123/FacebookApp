import { useContext, useState } from "react";
import { photoUser } from "../../../assets";
import { ButtonForm } from "../../../modules/Auth";
// import { WindownMessage } from "../../../MessagesApp";
import { EventsBirthday } from "../../../modules/EventsBirthday/EventsBirthday";
import { AuthUserContext } from "../../../context";
import { whichBirthdayIsClose } from "../../../modules/EventsBirthday/helpers/whoBirthdayIsClose";

import styles from "./sideMessage.module.css";

export const SideMessage = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const [openBirthdays, setOpenBirthdays] = useState(false);

  const usersWhoBirthdayIsClose = whichBirthdayIsClose(users);

  return (
    <>
      <div className={styles.sideMessage__container}>
        <div className={styles.sideMessage__content}>
          <div className={styles.sideMessage__windown_events}>
            <h3>
              <i className="fa-solid fa-cake-candles"></i>
              Cumpleaños cercanos
            </h3>
            {usersWhoBirthdayIsClose.slice(0, 2).map((userBirthday) => (
              <div
                className={styles.sideMessage__info_card_events}
                key={userBirthday.uid}
              >
                <p>{userBirthday.displayName}</p>
                <span>
                  {userBirthday.birthday} ({userBirthday.daysLeft} dias)
                </span>
              </div>
            ))}

            <ButtonForm
              title="Ver más..."
              stylesButton={{ height: "2.5rem", fontSize: "1rem" }}
              onSubmit={() => setOpenBirthdays(true)}
            />
          </div>

          <div className={styles.sideMessage__contacts_users}>
            <div className={styles.sideMessage__titles}>
              <p>Contactos</p>
            </div>
            <div className={styles.sideMessage__users_lists}>
              <div
                className={styles.sideMessage__list_item}
                onClick={() => createANewWindow(userSelected.length)}
              >
                <figure className={styles.sideMessage__photo_user}>
                  <img src={photoUser} alt="Foto de perfil" />
                  <i className="fa-solid fa-circle"></i>
                </figure>
                <p>Martin Elias</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.sideMessage__content_windown_messages}
          style={{}}
        >
          {/* <WindownMessage /> */}
        </div>
      </div>

      {openBirthdays && (
        <EventsBirthday
          setOpenBirthdays={setOpenBirthdays}
          usersWhoBirthdayIsClose={usersWhoBirthdayIsClose}
        />
      )}
    </>
  );
};
