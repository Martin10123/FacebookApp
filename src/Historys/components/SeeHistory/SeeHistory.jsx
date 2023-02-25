import { useState } from "react";
import { photoUser } from "../../../assets";
// import { ImagesItems } from "../ImagesHistory/ImagesHistory";
import { OptionsHistory } from "./OptionsHistory";

import styles from "./seeHistory.module.css";

export const SeeHistory = () => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div className={styles.see_history__container}>
      <div className={styles.see_history__content}>
        <div className={styles.see_history__header}>
          <div className={styles.see_history__timeline}>
            <div className={styles.see_history__line}></div>
            <div className={styles.see_history__line}></div>
            <div className={styles.see_history__line}></div>
          </div>

          <div className={styles.see_history__info_user}>
            <figure className={styles.see_history__photo_user}>
              <img src={photoUser} alt="Foto de perfil del usuario" />
              <figcaption>Martin Elias Simarra Salgado</figcaption>
            </figure>
            <p>31 min</p>
            <i
              className="fa-solid fa-ellipsis"
              onClick={() => setOpenOptions(true)}
            ></i>
            <i className="fa-solid fa-x"></i>

            {openOptions && <OptionsHistory setOpenOptions={setOpenOptions} />}
          </div>
        </div>

        <div className={styles.see_history__text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            laudantium nisi quisquam, ab illum odit est quo omnis consequuntur
            facilis explicabo earum maiores, corrupti necessitatibus fugiat
            reprehenderit quis exercitationem? Id?
          </p>
        </div>

        {/* <ImagesItems /> */}

        <div className={styles.see_history__send_message}>
          <div className={styles.see_history__count_view_history}>
            <p>0</p>
            <i className="fa-regular fa-eye"></i>
          </div>

          <div className={styles.see_history__input_form}>
            <i className="fa-brands fa-facebook-messenger"></i>
            <p>Enviar mensaje...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
