import { useContext, useState } from "react";

import { AuthUserContext } from "../../../../context";
import { EditDetailsItem } from "../components/EditDetailsItem";
import { EditDetailsPage } from "../../EditDetails";
import { EditHobbies } from "../../EditHobbies/EditHobbiesPage";
import { EditPhoto } from "../../EditPhoto";
import { EditStateBio } from "../../EditStateBio/EditStateBio";
import { LayoutInfo } from "../layout/LayoutInfo";
import { photoUser } from "../../../../assets";

import styles from "../editProfile.module.css";

export const EditProfile = ({ setOpenEditProfile }) => {
  const { infoUserActive } = useContext(AuthUserContext);
  const [openEditPhoto, setOpenEditPhoto] = useState(false);
  const [openEditStateBio, setOpenEditStateBio] = useState(false);
  const [openEditDetails, setOpenEditDetails] = useState(false);
  const [openEditHobbies, setOpenEditHobbies] = useState(false);
  const [whatPhotoSelected, setWhatPhotoSelected] = useState("");

  return (
    <>
      <div className={styles.edit__container}>
        <div className={styles.edit__content}>
          <div className={styles.edit__nav}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenEditProfile(false)}
            ></i>
            <p>Editar perfil</p>
          </div>

          <div className={styles.edit__options}>
            <LayoutInfo
              nameButton="Agregar"
              onOpenInfo={setOpenEditPhoto}
              title="Foto de perfil"
              setWhatPhotoSelected={setWhatPhotoSelected}
            >
              <div className={styles.edit__profile_photo}>
                <img
                  src={infoUserActive?.photoUrl || photoUser}
                  alt="Foto del usuario"
                />
              </div>
            </LayoutInfo>

            <LayoutInfo
              nameButton="Agregar"
              onOpenInfo={setOpenEditPhoto}
              title="Foto de portada"
              setWhatPhotoSelected={setWhatPhotoSelected}
            >
              {infoUserActive?.coverPhoto ? (
                <figure className={styles.edit__image_cover}>
                  <img src={infoUserActive?.coverPhoto || photoUser} alt="" />
                </figure>
              ) : (
                <div className={styles.edit__not_image_cover}>
                  <i className="fa-regular fa-images"></i>
                </div>
              )}
            </LayoutInfo>

            <LayoutInfo
              nameButton="Agregar"
              onOpenInfo={setOpenEditStateBio}
              title="Estado"
              setWhatPhotoSelected={setWhatPhotoSelected}
            >
              <div className={styles.edit__state_bio}>
                Describete a ti mismo...
              </div>
            </LayoutInfo>

            <LayoutInfo
              nameButton="Editar"
              onOpenInfo={setOpenEditDetails}
              title="Detalles"
              setWhatPhotoSelected={setWhatPhotoSelected}
            >
              <EditDetailsItem />
            </LayoutInfo>

            <LayoutInfo
              nameButton="Agregar"
              onOpenInfo={setOpenEditHobbies}
              title="Pasatiempos"
              setWhatPhotoSelected={setWhatPhotoSelected}
            >
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

      {openEditPhoto && (
        <EditPhoto
          setOpenEditPhoto={setOpenEditPhoto}
          typePhoto={
            whatPhotoSelected === "Foto de perfil" ? "photoUrl" : "coverPhoto"
          }
        />
      )}
      {openEditStateBio && (
        <EditStateBio setOpenEditStateBio={setOpenEditStateBio} />
      )}
      {openEditDetails && (
        <EditDetailsPage setOpenEditDetails={setOpenEditDetails} />
      )}
      {openEditHobbies && (
        <EditHobbies setOpenEditHobbies={setOpenEditHobbies} />
      )}
    </>
  );
};
