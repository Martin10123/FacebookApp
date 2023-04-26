import { useState } from "react";
import { photoUser } from "../../../../assets";
import { EditPhoto } from "../../components";
import { ProfileButtons } from "./ProfileButtons/ProfileButtons";
import { ModalSentMessage } from "../../../MessagesApp";

import styles from "./photosUserName.module.css";

export const PhotosUserName = ({
  isUserActive,
  matchedUser,
  setOpenEditProfile,
}) => {
  const [openEditPhoto, setOpenEditPhoto] = useState(false);
  const [openMessange, setOpenMessange] = useState(false);

  return (
    <>
      <div className={styles.profile__content_images_user_info}>
        <div className={styles.profile__cover_photo}>
          {matchedUser?.coverPhoto ? (
            <img src={matchedUser?.coverPhoto} alt="" />
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
              src={matchedUser?.photoUrl || photoUser}
              alt="Foto del perfil"
            />
            {isUserActive && (
              <div
                className={styles.profile__camera_float}
                onClick={() => setOpenEditPhoto(true)}
              >
                <i className="fa-solid fa-camera"></i>
              </div>
            )}
          </div>

          <div className={styles.profile__name_state}>
            <p className={styles.profile__name_user}>
              {matchedUser?.displayName}
            </p>
            <span>{matchedUser?.stateBio || "Escribe un estado..."}</span>
          </div>

          <ProfileButtons
            isUserActive={isUserActive}
            matchedUser={matchedUser}
            setOpenEditProfile={setOpenEditProfile}
            setOpenMessange={setOpenMessange}
          />
        </div>
      </div>

      {openEditPhoto && (
        <EditPhoto setOpenEditPhoto={setOpenEditPhoto} typePhoto="photoUrl" />
      )}

      {openMessange && (
        <ModalSentMessage
          matchedUser={matchedUser}
          setOpenMessange={setOpenMessange}
        />
      )}
    </>
  );
};
