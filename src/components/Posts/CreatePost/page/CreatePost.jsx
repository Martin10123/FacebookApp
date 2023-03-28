import { usePreventScroll } from "../../../../hooks";
import { photoUser } from "../../../../assets";
import { TagFriends, ShowImagesSelected } from "../components";
import { useAddPost } from "../hook/useAddPost";
import { Toaster } from "react-hot-toast";

import styles from "./createPost.module.css";

export const CreatePost = ({
  goToProfileUser,
  infoUserActive,
  setOpenCreatePost,
}) => {
  usePreventScroll();

  const {
    // estados - referencias
    fileInputRef,
    listTagFriends,
    openTagFriends,
    openViewImagesSelected,
    post,
    privacity,
    selectedImages,
    startLoadingPost,

    // metodos
    onCreateNewPost,
    onDeletePhotoSelected,
    onFileInputchange,
    onInputChange,
    setListTagFriends,
    setOpenTagFriends,
    setOpenViewImagesSelected,
  } = useAddPost({ infoUserActive, setOpenCreatePost });

  return (
    <>
      <div className={styles.create__container}>
        <div className={styles.create__content}>
          <div className={styles.create__nav}>
            <div className={styles.create__center_div}></div>

            <div className={styles.create__return_arrow}>
              <i
                className="fa-solid fa-arrow-left"
                onClick={() => setOpenCreatePost(false)}
              ></i>
              <p>Crear publicación</p>
            </div>

            <button
              className={styles.create__btn_create}
              disabled={startLoadingPost}
              onClick={onCreateNewPost}
            >
              {startLoadingPost ? "Publicando..." : "Publicar"}
            </button>

            <button
              className={styles.create__btn_close}
              disabled={startLoadingPost}
              onClick={() => setOpenCreatePost(false)}
            >
              X
            </button>
          </div>

          <div className={styles.create__info_user}>
            <img
              src={infoUserActive?.photoUrl || photoUser}
              alt="Foto de perfil del usuario activo"
              onClick={() => goToProfileUser(setOpenCreatePost)}
            />

            <div className={styles.create__name_user}>
              <p>{infoUserActive?.displayName}</p>

              <select
                className={styles.create__select_privacity}
                name="privacity"
                value={privacity}
                onChange={onInputChange}
              >
                <option value="Publico">Publico</option>
                <option value="Solo amigos">Solo amigos</option>
                <option value="Solo yo">Solo yo</option>
              </select>
            </div>
          </div>

          <div className={styles.create__writte_post}>
            <textarea
              name="post"
              placeholder="¿Que estas pensando?"
              value={post}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.create__footer}>
            <p className={styles.create__title_add_post}>
              Agregar a tu publicación
            </p>
            <div className={styles.create__content_icons}>
              <i
                className="fa-solid fa-images"
                onClick={() => fileInputRef.current.click()}
              ></i>

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

          <input
            multiple
            onChange={onFileInputchange}
            ref={fileInputRef}
            style={{ display: "none" }}
            type="file"
          />

          <div
            className={styles.create__btn_create_post_desk}
            onClick={onCreateNewPost}
          >
            <button disabled={startLoadingPost}>
              {startLoadingPost ? "Publicando..." : "Publicar"}
            </button>
          </div>
        </div>
      </div>

      {openTagFriends && (
        <TagFriends
          listTagFriends={listTagFriends}
          setListTagFriends={setListTagFriends}
          setOpenTagFriends={setOpenTagFriends}
        />
      )}

      {openViewImagesSelected && (
        <ShowImagesSelected
          images={selectedImages}
          onDeletePhotoSelected={onDeletePhotoSelected}
          setOpenViewImagesSelected={setOpenViewImagesSelected}
        />
      )}

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
