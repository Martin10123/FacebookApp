import { useContext, useState } from "react";
import { arrayRemove, doc, setDoc } from "firebase/firestore";

import { AuthUserContext } from "../../../../../context";
import { EditDetailsItem } from "../components/EditDetailsItem";
import { EditDetailsPage } from "../../EditDetails";
import { EditHobbies } from "../../EditHobbies/EditHobbiesPage";
import { EditPhoto } from "../../EditPhoto";
import { EditStateBio } from "../../EditStateBio/EditStateBio";
import { firebaseDB } from "../../../../../services";
import { LayoutInfo } from "../layout/LayoutInfo";
import { listHobbies } from "../../../helpers/dataGlobal";
import { photoUser } from "../../../../../assets";
import { usePreventScroll } from "../../../../../hooks";

import styles from "../editProfile.module.css";

export const EditProfile = ({
  isUserActive,
  setOpenEditProfile,
  userMatchUsername,
}) => {
  usePreventScroll();

  const { infoUserActive } = useContext(AuthUserContext);
  const [openEditPhoto, setOpenEditPhoto] = useState(false);
  const [openEditStateBio, setOpenEditStateBio] = useState(false);
  const [openEditDetails, setOpenEditDetails] = useState(false);
  const [openEditHobbies, setOpenEditHobbies] = useState(false);
  const [whatPhotoSelected, setWhatPhotoSelected] = useState("");

  const onRemoveHobbie = async (hobbie) => {
    try {
      await setDoc(
        doc(firebaseDB, "users", infoUserActive.uid),
        {
          infoPersonal: {
            hobbies: arrayRemove(hobbie),
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.edit__container}>
        <div className={styles.edit__content}>
          <div className={styles.edit__nav}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenEditProfile(false)}
            ></i>
            <p>
              {isUserActive
                ? "Editar perfil"
                : `Detalles de ${userMatchUsername.displayName}`}
            </p>
          </div>

          <div className={styles.edit__options}>
            <LayoutInfo
              isUserActive={isUserActive}
              nameButton="Agregar"
              onOpenInfo={setOpenEditPhoto}
              setWhatPhotoSelected={setWhatPhotoSelected}
              title="Foto de perfil"
            >
              <div className={styles.edit__profile_photo}>
                <img
                  src={userMatchUsername?.photoUrl || photoUser}
                  alt="Foto del usuario"
                />
              </div>
            </LayoutInfo>

            <LayoutInfo
              isUserActive={isUserActive}
              nameButton="Agregar"
              onOpenInfo={setOpenEditPhoto}
              setWhatPhotoSelected={setWhatPhotoSelected}
              title="Foto de portada"
            >
              {userMatchUsername?.coverPhoto ? (
                <figure className={styles.edit__image_cover}>
                  <img
                    src={userMatchUsername?.coverPhoto || photoUser}
                    alt=""
                  />
                </figure>
              ) : (
                <div className={styles.edit__not_image_cover}>
                  <i className="fa-regular fa-images"></i>
                </div>
              )}
            </LayoutInfo>

            <LayoutInfo
              isUserActive={isUserActive}
              nameButton="Agregar"
              onOpenInfo={setOpenEditStateBio}
              setWhatPhotoSelected={setWhatPhotoSelected}
              title="Estado"
            >
              <div className={styles.edit__state_bio}>
                {userMatchUsername?.stateBio || "Describete a ti mismo..."}
              </div>
            </LayoutInfo>

            <LayoutInfo
              isUserActive={isUserActive}
              nameButton="Editar"
              onOpenInfo={setOpenEditDetails}
              setWhatPhotoSelected={setWhatPhotoSelected}
              title="Detalles"
            >
              <EditDetailsItem userMatchUsername={userMatchUsername} />
            </LayoutInfo>

            <LayoutInfo
              isUserActive={isUserActive}
              nameButton="Agregar"
              onOpenInfo={setOpenEditHobbies}
              setWhatPhotoSelected={setWhatPhotoSelected}
              title="Pasatiempos"
            >
              <div className={styles.edit__lists_hobbies}>
                {listHobbies.map(
                  ({ name, img }) =>
                    userMatchUsername?.infoPersonal?.hobbies?.includes(
                      name
                    ) && (
                      <div key={name} className={styles.edit__hobbies_item}>
                        <img src={img} alt="" />
                        <p>{name}</p>

                        {isUserActive && (
                          <button
                            className={styles.edit__btn_delete_hobbie}
                            onClick={() => onRemoveHobbie(name)}
                          >
                            X
                          </button>
                        )}
                      </div>
                    )
                )}
              </div>
            </LayoutInfo>
          </div>
        </div>
      </div>

      {openEditPhoto && (
        <EditPhoto
          setOpenEditPhoto={setOpenEditPhoto}
          typePhoto={
            whatPhotoSelected === "Foto de perfil" ? "photoUrl" : "coverPhoto"
          }
        />
      )}
      {openEditStateBio && (
        <EditStateBio
          infoUserActive={infoUserActive}
          setOpenEditStateBio={setOpenEditStateBio}
        />
      )}
      {openEditDetails && (
        <EditDetailsPage
          infoUserActive={infoUserActive}
          setOpenEditDetails={setOpenEditDetails}
          userMatchUsername={userMatchUsername}
        />
      )}
      {openEditHobbies && (
        <EditHobbies
          infoUserActive={infoUserActive}
          setOpenEditHobbies={setOpenEditHobbies}
        />
      )}
    </>
  );
};
