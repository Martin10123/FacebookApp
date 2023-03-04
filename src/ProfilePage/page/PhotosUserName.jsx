import { photoUser } from "../../assets";

import styles from "./profile.module.css";

export const PhotosUserName = ({ userProfile, userActive }) => {
  const isUserActive = userProfile?.uid === userActive?.uid;

  return (
    <div className={styles.profile__content_images_user_info}>
      <div className={styles.profile__cover_photo}>
        <div className={styles.profile__img_cover}>
          <p>
            <i className="fa-solid fa-camera"></i>
            Agregar imagen portada
          </p>
        </div>
      </div>

      <div className={styles.profile__content_photo_user}>
        <div className={styles.profile__photo_user}>
          <img
            src={userProfile?.photoUrl ? userProfile?.photoUrl : photoUser}
            alt="Foto del perfil"
          />
          <div className={styles.profile__camera_float}>
            <i className="fa-solid fa-camera"></i>
          </div>
        </div>

        <div className={styles.profile__name_state}>
          <p className={styles.profile__name_user}>
            {userProfile?.displayName}
          </p>
          <span>{userProfile?.personalStatus || "Escribe un estado..."}</span>
        </div>

        <div
          className={
            isUserActive
              ? styles.profile__buttons_history
              : styles.profile__buttons_history_other
          }
        >
          {isUserActive ? (
            <>
              <ProfileButton
                buttonText="Agregar historia"
                buttonClass={styles.profile__add_history}
                iconClass="fa-solid fa-circle-plus"
              />
              <ProfileButton
                buttonText=""
                buttonClass={styles.profile__ellipsis}
                iconClass="fa-regular fa-pen-to-square"
              />
            </>
          ) : (
            <>
              <ProfileButton
                buttonText="Agregar"
                buttonClass={styles.profile__btn_other}
                iconClass="fa-solid fa-user-plus"
              />
              <ProfileButton
                buttonClass={styles.profile__btn_other}
                buttonText="Mensaje"
                iconClass="fa-brands fa-facebook-messenger"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileButton = ({ iconClass, buttonText, buttonClass }) => {
  return (
    <button className={buttonClass}>
      <i className={iconClass}></i>
      {buttonText}
    </button>
  );
};
