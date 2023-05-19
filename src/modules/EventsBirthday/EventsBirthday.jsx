import { useState } from "react";
import { usePreventScroll } from "../../hooks";
import { ModalSentMessage } from "../MessagesApp";
import { CardBithday } from "./components/CardBithday";

import styles from "./eventsBirthday.module.css";

export const EventsBirthday = ({
  setOpenBirthdays,
  usersWhoBirthdayIsClose,
}) => {
  usePreventScroll();

  const [openSentMessage, setOpenSentMessage] = useState(false);
  const [userSelectMessage, setUserSelectMessage] = useState({});

  const onSelectUserBithday = (user) => {
    setOpenSentMessage(true);

    setUserSelectMessage(user);
  };

  const birthdayToday = usersWhoBirthdayIsClose.filter(
    (birthday) => birthday.daysLeft === 0 || birthday.daysLeft === 1
  );

  return (
    <>
      <section className={styles.events__container}>
        <div className={styles.events__header}>
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => setOpenBirthdays(false)}
          ></i>
          <p>Eventos</p>
          <p></p>
        </div>
        <div className={styles.events__content}>
          {birthdayToday.length != 0 && (
            <>
              <h2 className={styles.events__title}>Cumpleaños de hoy</h2>

              <div className={styles.events__list_users}>
                {birthdayToday.map((userBirthday) => (
                  <CardBithday
                    userBirthday={userBirthday}
                    key={userBirthday.uid}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className={styles.events__title} style={{ margin: "1rem 0 0 0" }}>
            Otros cumpleaños más cercanos
          </h2>

          <div className={styles.events__list_users}>
            {usersWhoBirthdayIsClose.map((userBirthday) => (
              <CardBithday
                key={userBirthday.uid}
                onSelectUserBithday={onSelectUserBithday}
                userBirthday={userBirthday}
              />
            ))}
          </div>
        </div>
      </section>

      {openSentMessage && (
        <ModalSentMessage
          matchedUser={userSelectMessage}
          setOpenMessange={setOpenSentMessage}
          messagePrede={`Feliz cumpleaños ${userSelectMessage.displayName}pásala genial en tu día.`}
        />
      )}
    </>
  );
};
