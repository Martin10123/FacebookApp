import { useContext, useState } from "react";
import { arrayRemove, doc, setDoc } from "firebase/firestore";

import { AuthUserContext } from "../../../../context";
import { EditDetailsItem } from "../components/EditDetailsItem";
import { EditDetailsPage } from "../../EditDetails";
import { EditHobbies } from "../../EditHobbies/EditHobbiesPage";
import { EditPhoto } from "../../EditPhoto";
import { EditStateBio } from "../../EditStateBio/EditStateBio";
import { firebaseDB } from "../../../../firebase/firebaseConfig";
import { LayoutInfo } from "../layout/LayoutInfo";
import { listHobbies } from "../../../helpers/dataGlobal";
import { photoUser } from "../../../../assets";
import { usePreventScroll } from "../../../../hooks";

import styles from "../editProfile.module.css";

export const EditProfile = ({ setOpenEditProfile }) => {
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
                {infoUserActive?.stateBio || "Describete a ti mismo..."}
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
                {listHobbies.map(
                  ({ name, img }) =>
                    infoUserActive?.infoPersonal?.hobbies?.includes(name) && (
                      <div key={name} className={styles.edit__hobbies_item}>
                        <img src={img} alt="" />
                        <p>{name}</p>

                        <button
                          className={styles.edit__btn_delete_hobbie}
                          onClick={() => onRemoveHobbie(name)}
                        >
                          X
                        </button>
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
        <EditDetailsPage setOpenEditDetails={setOpenEditDetails} />
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
