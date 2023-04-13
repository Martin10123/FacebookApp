import { Link } from "react-router-dom";
import { EditStatePosts } from "../../ModalEditStatePost/ModalEditStatePost";
import { SureDelete } from "../../../SureDelete/SureDelete";
import { useOptionsPost } from "../hook/useOptionsPost";

import styles from "../cardPost.module.css";

export const OptionsPost = ({
  displayNameUserCreatePost,
  infoUserActive,
  isNearHeight,
  post,
  setOpenOptions,
}) => {
  const {
    // Atributos
    iCreatedThisPost,
    isSavedPost,
    openSureDeletePost,
    openUpdatePost,
    refClose,

    // Metodos
    onCopyLinkPost,
    onDeletePosts,
    onSavePost,
    setOpenSureDeletePost,
    setOpenUpdatePost,
  } = useOptionsPost({ infoUserActive, post, setOpenOptions });

  const topOptions = iCreatedThisPost
    ? styles.options__post_top
    : styles.options__post_top_no_active_user;

  return (
    <div
      ref={refClose}
      className={`${styles.options_post__container} ${
        isNearHeight ? topOptions : ""
      }`}
    >
      <div
        className={styles.options_post__close_modal}
        onClick={() => setOpenOptions(false)}
      ></div>
      <div className={styles.options_post__content}>
        <div className={styles.options_post_info}>
          <Link
            className={styles.options_post__item}
            to={`/${displayNameUserCreatePost}/post/${post.idDoc}`}
          >
            <i className="fa-solid fa-newspaper"></i>
            <p>Ver publicación</p>
          </Link>

          <div className={styles.options_post__item} onClick={onSavePost}>
            <i className="fa-solid fa-bookmark"></i>
            <p>{isSavedPost ? "Sacar" : "Guardar"} publicación</p>
          </div>

          {iCreatedThisPost && (
            <div
              className={styles.options_post__item}
              onClick={() => setOpenUpdatePost(true)}
            >
              <i className="fa-solid fa-pen"></i>
              <p>Editar publicación</p>
            </div>
          )}

          {iCreatedThisPost && (
            <div
              className={styles.options_post__item}
              onClick={() => setOpenSureDeletePost(true)}
            >
              <i className="fa-solid fa-trash-can"></i>
              <p>Eliminar publicación</p>
            </div>
          )}

          <div className={styles.options_post__item} onClick={onCopyLinkPost}>
            <i className="fa-solid fa-copy"></i>
            <p>Copiar enlace</p>
          </div>
        </div>
      </div>
      {openUpdatePost && (
        <EditStatePosts
          infoUserActive={infoUserActive}
          post={post}
          setOpenUpdatePost={setOpenUpdatePost}
        />
      )}

      {openSureDeletePost && (
        <SureDelete
          buttonText="Borrar"
          confirmationMessage="¿Seguro que quieres borrar esta publicación?"
          onClose={() => setOpenSureDeletePost(false)}
          onDelete={onDeletePosts}
        />
      )}
    </div>
  );
};
