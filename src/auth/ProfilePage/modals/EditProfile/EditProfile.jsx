import { photoUser } from "../../../../assets";
import { LayoutInfo } from "./LayoutInfo";

import styles from "./editProfile.module.css";

export const EditProfile = () => {
  return (
    <div className={styles.edit__container}>
      <div className={styles.edit__content}>
        <div className={styles.edit__nav}>
          <i className="fa-solid fa-arrow-left"></i>
          <p>Editar perfil</p>
        </div>

        <div className={styles.edit__options}>
          <LayoutInfo nameButton="Agregar" title="Foto de perfil">
            <div className={styles.edit__profile_photo}>
              <img src={photoUser} alt="Foto del usuario" />
            </div>
          </LayoutInfo>
          <LayoutInfo nameButton="Agregar" title="Foto de portada">
            <div className={styles.edit__image_cover}>
              <i className="fa-regular fa-images"></i>
            </div>
          </LayoutInfo>
          <LayoutInfo nameButton="Agregar" title="Estado">
            <div className={styles.edit__state_bio}>
              Describete a ti mismo...
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia esse saepe totam non rem aut! Beatae hic facere officiis
              molestias a obcaecati repellat itaque consequuntur, libero
              quisquam adipisci dolore. */}
            </div>
          </LayoutInfo>
          <LayoutInfo nameButton="Editar" title="Detalles">
            <div className={styles.edit__details}>
              <div className={styles.edit__details_item}>
                <i className="fa-solid fa-briefcase"></i>
                <p>¿En que trabajas?</p>
              </div>
              <div className={styles.edit__details_item}>
                <i className="fa-solid fa-heart"></i>
                <p>¿Relación?</p>
              </div>
              <div className={styles.edit__details_item}>
                <i className="fa-solid fa-clock"></i>
                <p>Se unió en Junio</p>
              </div>
              <div className={styles.edit__details_item}>
                <i className="fa-solid fa-house-chimney"></i>
                <p>Ciudad actual</p>
              </div>
              <div className={styles.edit__details_item}>
                <i className="fa-solid fa-graduation-cap"></i>
                <p>Educación</p>
              </div>
              <div className={styles.edit__details_item}>
                <i className="fa-solid fa-location-dot"></i>
                <p>Barrio - localidad</p>
              </div>
            </div>
          </LayoutInfo>
          <LayoutInfo nameButton="Agregar" title="Pasatiempos">
            <div className={styles.edit__lists_hobbies}>
              <div className={styles.edit__hobbies_item}>
                <img src={photoUser} alt="" />
                <p>Educación</p>

                <button className={styles.edit__btn_delete_hobbie}>X</button>
              </div>
              <div className={styles.edit__hobbies_item}>
                <img src={photoUser} alt="" />
                <p>Educación</p>

                <button className={styles.edit__btn_delete_hobbie}>X</button>
              </div>
              <div className={styles.edit__hobbies_item}>
                <img src={photoUser} alt="" />
                <p>Educación</p>

                <button className={styles.edit__btn_delete_hobbie}>X</button>
              </div>
            </div>
          </LayoutInfo>
        </div>
      </div>
    </div>
  );
};
