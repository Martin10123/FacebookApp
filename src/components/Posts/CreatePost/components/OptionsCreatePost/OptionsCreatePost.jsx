import styles from "../../page/createPost.module.css";

export const OptionsCreatePost = ({
  fileInputRef,
  selectedImages,
  setOpenTagFriends,
  setOpenViewImagesSelected,
  showPhotos,
}) => {
  return (
    <div className={styles.create__footer}>
      <p className={styles.create__title_add_post}>Agregar a tu publicación</p>
      <div className={styles.create__content_icons}>
        {showPhotos && (
          <i
            className="fa-solid fa-images"
            onClick={() => fileInputRef.current.click()}
          ></i>
        )}

        <i
          className="fa-solid fa-user-tag"
          onClick={() => setOpenTagFriends(true)}
        ></i>
        <i className="fa-solid fa-face-laugh"></i>
        <i className="fa-solid fa-location-dot"></i>
        <i className="fa-solid fa-video"></i>

        {selectedImages.length !== 0 && (
          <p
            className={styles.create__count_imgs}
            onClick={() => setOpenViewImagesSelected(true)}
          >
            {selectedImages.length}
          </p>
        )}
      </div>
    </div>
  );
};
