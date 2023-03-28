import styles from "./showImagesSelected.module.css";

export const ShowImagesSelected = ({
  images,
  onDeletePhotoSelected,
  setOpenViewImagesSelected,
}) => {
  return (
    <div className={styles.showimages__container}>
      <div className={styles.showimages__content}>
        <div className={styles.showimages__nav}>
          <span>j</span>
          <p>Imagenes seleccionadas</p>
          <button onClick={() => setOpenViewImagesSelected(false)}>X</button>
        </div>

        <div className={styles.showimages__image_list}>
          {images.map((image) => (
            <div className={styles.showimages__image} key={image.idFile}>
              <button
                className={styles.showimages__delete_img}
                onClick={() => onDeletePhotoSelected(image.idFile)}
              >
                X
              </button>
              <img src={URL.createObjectURL(image.file)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
