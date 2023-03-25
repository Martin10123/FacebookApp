import { useState } from "react";
import { photoUser } from "../../../../assets";
import { EditPhoto, EditProfile } from "../../components";
import { useAddFriends } from "../../hook";
import { ProfileButtons } from "./ProfileButtons/ProfileButtons";

import styles from "./photosUserName.module.css";

export const PhotosUserName = ({
  infoUserActive,
  userMatchUsername,
  isUserActive,
}) => {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openEditPhoto, setOpenEditPhoto] = useState(false);

  const { onAddFriends } = useAddFriends({ infoUserActive, userMatchUsername });

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
              {userMatchUsername?.displayName}
            </p>
            <span>{userMatchUsername?.stateBio || "Escribe un estado..."}</span>
          </div>

          <ProfileButtons
            isUserActive={isUserActive}
            onAddFriends={onAddFriends}
            setOpenEditProfile={setOpenEditProfile}
          />
        </div>
      </div>

      {openEditProfile && (
        <EditProfile
          isUserActive={isUserActive}
          setOpenEditProfile={setOpenEditProfile}
          userMatchUsername={userMatchUsername}
        />
      )}

      {openEditPhoto && (
        <EditPhoto setOpenEditPhoto={setOpenEditPhoto} typePhoto="photoUrl" />
      )}
    </>
  );
};
