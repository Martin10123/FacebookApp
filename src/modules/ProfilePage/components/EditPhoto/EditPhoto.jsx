import { usePhoto } from "./hook/usePhoto";
import { SureDeleteElement } from "../SureDeletePost/SureDeletePost";
import { usePreventScroll } from "../../../../hooks";

import styles from "./editPhoto.module.css";

export const EditPhoto = ({ typePhoto, setOpenEditPhoto }) => {
  usePreventScroll();

  const {
    displayName,
    fileInputRef,
    listPhotos,
    onChangePhoto,
    onDeleteObjectIfNotProfilePhoto,
    onDeletePhotoActual,
    onOpenModalDelete,
    openSureDelete,
    setOpenSureDelete,
    startLoadingDeletePhoto,
    startLoadingListPhotos,
    startLoadingPhoto,
  } = usePhoto({ typePhoto, setOpenEditPhoto });

  return (
    <>
      <div className={styles.edit_photo__container}>
        <div className={styles.edit_photo__box}>
          <div className={styles.edit_photo__content}>
            <div className={styles.edit_photo__return}>
              <i
                className="fa-solid fa-arrow-left"
                onClick={() => setOpenEditPhoto(false)}
              ></i>
              <p>Selecciona foto</p>
            </div>
            <button
              className={styles.edit_photo__button}
              disabled={startLoadingPhoto}
              onClick={() => fileInputRef.current.click()}
            >
              <i className="fa-solid fa-circle-plus"></i>
              <p>Agregar foto</p>
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={onChangePhoto}
              style={{ display: "none" }}
            />

            {startLoadingPhoto && (
              <div className={styles.showLoading}>
                <p>{displayName} estamos cargando tu foto...</p>
              </div>
            )}

            {startLoadingListPhotos && (
              <div className={styles.showLoading}>
                <p>Cargando...</p>
              </div>
            )}

            <div className={styles.edit_photo__list_photos}>
              {listPhotos.map((photo) => (
                <figure key={photo.url} className={styles.edit_photo__item}>
                  <img src={photo.url} alt="Foto guardada" />

                  <figcaption
                    className={styles.edit_photo__delete_photo}
                    onClick={() => onOpenModalDelete(photo.ref)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </figcaption>
                </figure>
              ))}
            </div>

            <button
              className={styles.edit_photo__button_delete}
              disabled={startLoadingDeletePhoto}
              onClick={onDeletePhotoActual}
            >
              <i className="fa-solid fa-circle-plus"></i>
              {!startLoadingDeletePhoto ? (
                <p>
                  Eliminar foto de{" "}
                  {typePhoto === "photoUrl" ? "perfil" : "portada"} actual
                </p>
              ) : (
                <p>
                  Eliminando foto de{" "}
                  {typePhoto === "photoUrl" ? "perfil" : "portada"}...
                </p>
              )}
            </button>
          </div>
        </div>
      </div>
      {openSureDelete && (
        <SureDeleteElement
          onCancelDelete={() => setOpenSureDelete(false)}
          onSubmitDelete={onDeleteObjectIfNotProfilePhoto}
        />
      )}
    </>
  );
};
