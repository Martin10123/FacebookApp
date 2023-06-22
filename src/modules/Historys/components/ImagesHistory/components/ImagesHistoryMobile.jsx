import { PrivacityHistories } from "../../SelectTypeHistory/components/PrivacityHistories";
import { useImagesHistory } from "../../hooks";

import styles from "../page/imagesHistory.module.css";

export const ImagesHistoryMobile = ({ infoUserActive }) => {
  const {
    // Atributos
    isMobile,
    onFileInputchange,
    openSettings,
    refFile,
    selectImage,
    startLoading,

    // Metodos
    onCloseModal,
    onDeleteImageSelect,
    onSaveHistory,
    setOpenSettings,
  } = useImagesHistory({ infoUserActive });

  return (
    <>
      <div className={styles.image__history__content}>
        <div className={styles.image__history__nav}>
          <i className="fa-solid fa-chevron-left" onClick={onCloseModal}></i>
          <h3>Vista previa</h3>
          <span>x</span>
        </div>

        <div className={styles.image__history__content_carrousel}>
          <div className={styles.image__history__list_images}>
            {Object.values(selectImage).map((image) => (
              <div
                className={styles.image__history__item_image}
                key={image.name + image.lastModified + image.size}
              >
                <div className={styles.image__history__list_nav}>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => onDeleteImageSelect(image.name)}
                  ></i>
                </div>

                <figure className={styles.image__history__show_image}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Imagen de la historia previa"
                  />
                </figure>
              </div>
            ))}

            <div
              className={styles.image__history__item_add_more_image}
              onClick={() => refFile.current.click()}
            >
              <div className={styles.image__history__add_more_title}>
                <i className="fa-regular fa-images"></i>
                <p className={styles.image__history__add_more_images}>
                  Agregar más
                </p>

                <input
                  multiple={isMobile ? true : false}
                  onChange={onFileInputchange}
                  ref={refFile}
                  style={{ display: "none" }}
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.image__history__footer_history}>
          <span
            className={styles.image__history__setting}
            onClick={() => setOpenSettings(true)}
          >
            <i className="fa-solid fa-user-gear"></i>
            <p>Privacidad</p>
          </span>

          <button
            className={styles.image__history__btn_create}
            onClick={onSaveHistory}
          >
            {startLoading ? "Compartiendo..." : "Compartir"}
          </button>
        </div>
      </div>

      {openSettings && <PrivacityHistories setOpenSettings={setOpenSettings} />}
    </>
  );
};
