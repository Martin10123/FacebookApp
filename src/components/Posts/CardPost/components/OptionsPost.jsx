import { useState } from "react";
import { arrayRemove, arrayUnion, doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { useCloseModal } from "../../../../hooks";
import { EditStatePosts } from "../../ModalEditStatePost/ModalEditStatePost";
import { firebaseDB } from "../../../../services";
import { SureDelete } from "../../../SureDelete/SureDelete";
import { useDeletePostComments } from "../../hook/useDeleteAllByPC";

import styles from "../cardPost.module.css";

export const OptionsPost = ({
  infoUserActive,
  isNearHeight,
  post,
  setOpenOptions,
}) => {
  const [openUpdatePost, setOpenUpdatePost] = useState(false);
  const [openSureDeletePost, setOpenSureDeletePost] = useState(false);
  const ref = useCloseModal(() => setOpenOptions(false));
  const { onDeletePost } = useDeletePostComments({
    firePath: "posts",
    infoToSearchFire: post,
  });

  const iCreatedThisPost = infoUserActive.uid === post.uid;
  const isSavedPost = infoUserActive?.savedPosts?.includes(post.idDoc);

  const onSavePost = async () => {
    try {
      await setDoc(
        doc(firebaseDB, "users", infoUserActive.uid),
        {
          savedPosts: isSavedPost
            ? arrayRemove(post.idDoc)
            : arrayUnion(post.idDoc),
        },
        { merge: true }
      );

      toast.success(
        isSavedPost
          ? "Se borro esta publicación de la lista"
          : "Se guardo correctamente la publicación"
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onDeletePosts = async () => {
    try {
      await onDeletePost();

      toast.success("Se borro correctamente la publicación");
    } catch (error) {
      console.error(error);
    }
  };

  const onCopyLinkPost = async () => {
    try {
      console.log(`/post/${post.idDoc}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.options_post__container} ${
        isNearHeight ? styles.options__post_top : ""
      }`}
    >
      <div
        className={styles.options_post__close_modal}
        onClick={() => setOpenOptions(false)}
      ></div>
      <div className={styles.options_post__content}>
        <div className={styles.options_post_info}>
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
