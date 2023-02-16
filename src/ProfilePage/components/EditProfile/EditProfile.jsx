import { EditDetailsItem } from "./EditDetailsItem";
import { LayoutInfo } from "./LayoutInfo";
import { photoUser } from "../../../../assets";

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
            </div>
          </LayoutInfo>

          <LayoutInfo nameButton="Editar" title="Detalles">
            <EditDetailsItem />
          </LayoutInfo>

          <LayoutInfo nameButton="Agregar" title="Pasatiempos">
            <div className={styles.edit__lists_hobbies}>
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
