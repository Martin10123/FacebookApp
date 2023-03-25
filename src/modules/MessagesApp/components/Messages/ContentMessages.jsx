import { messi, photoUser } from "../../../../assets";

import styles from "./messages.module.css";

export const ContentMessages = ({ imgDesk = false }) => {
  const imageDesk = imgDesk ? styles.message__image_desk : "";

  return (
    <>
      <div className={styles.message__info_message}>
        <figure className={styles.message__photo_user}>
          <img src={photoUser} alt="Foto de perfil" />
          <i className="fa-solid fa-circle"></i>
        </figure>

        <div className={styles.message__message_user_other}>
          <p className={styles.message__me_user_other}>
            JSDFJDSFJDSFJSFJD hola me siento un poco triste, pero estoy tratando
            de echar para adelante, ptm
            barcasfdkjfsdkjjdfkssdfkjjdsfkdsfsdfkjkjdfsjkfsdjkdfskjsdfjkdsfjksdfjksdf
          </p>
        </div>
      </div>

      <div className={styles.message__message_active}>
        <i className="fa-solid fa-circle-check"></i>
        <p className={styles.message__me_user_active}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nostrum
          reprehenderit labore facere ipsam eos repudiandae minima, eligendi
          molestias repellat. Alias vel id, ab eius quibusdam eum laboriosam
          voluptates! Architecto!
        </p>
      </div>

      <div className={styles.message__image_message_other}>
        <figure className={styles.message__photo_user}>
          <img src={photoUser} alt="Foto de perfil" />
          <i className="fa-solid fa-circle"></i>
        </figure>
        <figure className={`${styles.message__image} ${imageDesk}`}>
          <img src={messi} alt="" />
        </figure>
      </div>

      <div className={styles.message__image_message_active}>
        <i className="fa-solid fa-circle-check"></i>
        <figure className={`${styles.message__image} ${imageDesk}`}>
          <img src={messi} alt="" />
        </figure>
      </div>
    </>
  );
};
