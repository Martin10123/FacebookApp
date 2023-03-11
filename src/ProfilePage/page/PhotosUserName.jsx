import { useState } from "react";
import { photoUser } from "../../assets";
import { EditPhoto, EditProfile } from "../components";

import styles from "./profile.module.css";

export const PhotosUserName = ({ userMatchUsername, userActive }) => {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openEditPhoto, setOpenEditPhoto] = useState(false);
  const isUserActive = userMatchUsername?.uid === userActive?.uid;

  return (
    <>
      <div className={styles.profile__content_images_user_info}>
        <div className={styles.profile__cover_photo}>
          {userMatchUsername?.coverPhoto ? (
            <img src={userMatchUsername?.coverPhoto} alt="" />
          ) : (
            <div className={styles.profile__img_cover}>
              <p>
                <i className="fa-solid fa-camera"></i>
                Agregar imagen portada
              </p>
            </div>
          )}
        </div>

        <div className={styles.profile__content_photo_user}>
          <div className={styles.profile__photo_user}>
            <img
              src={userMatchUsername?.photoUrl || photoUser}
              alt="Foto del perfil"
            />
            <div className={styles.profile__camera_float}>
              <i
                className="fa-solid fa-camera"
                onClick={() => setOpenEditPhoto(true)}
              ></i>
            </div>
          </div>

          <div className={styles.profile__name_state}>
            <p className={styles.profile__name_user}>
              {userMatchUsername?.displayName}
            </p>
            <span>{userMatchUsername?.stateBio || "Escribe un estado..."}</span>
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
                  onClick={() => setOpenEditProfile(true)}
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

      {openEditProfile && (
        <EditProfile setOpenEditProfile={setOpenEditProfile} />
      )}

      {openEditPhoto && (
        <EditPhoto setOpenEditPhoto={setOpenEditPhoto} typePhoto="photoUrl" />
      )}
    </>
  );
};

const ProfileButton = ({ iconClass, buttonText, buttonClass, onClick }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <i className={iconClass}></i>
      {buttonText}
    </button>
  );
};
