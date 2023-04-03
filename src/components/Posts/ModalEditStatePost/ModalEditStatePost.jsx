import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { photoUser } from "../../../assets";
import { useForm, usePreventScroll } from "../../../hooks";
import { firebaseDB } from "../../../services";

import styles from "./modalEdit.module.css";

export const EditStatePosts = ({ post, infoUserActive, setOpenUpdatePost }) => {
  usePreventScroll();

  const [startLoading, setStartLoading] = useState(false);
  const { onInputChange, updatePost, privacity } = useForm({
    updatePost: post.post || "",
    privacity: post.privacity || "Publico",
  });
  const { displayName, photoUrl } = infoUserActive;

  const onUpdatePost = async () => {
    setStartLoading(true);
    try {
      await updateDoc(doc(firebaseDB, "posts", post.idDoc), {
        post: updatePost,
        privacity,
      });

      toast.success("Actualizaste correctamente la publicación");
      setStartLoading(false);
      setOpenUpdatePost(false);
    } catch (error) {
      console.error(error);
      setStartLoading(false);
    }
  };

  return (
    <section className={styles.modal__container}>
      <div className={styles.modal__box}>
        <div className={styles.modal__return}>
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => setOpenUpdatePost(false)}
          ></i>
          <p>Editar publicación</p>
        </div>
        <div className={styles.modal__content_user_info}>
          <figure className={styles.modal__user_photo}>
            <img src={photoUrl || photoUser} alt="Foto de perfil" />
          </figure>
          <div className={styles.modal__info_user}>
            <p>{displayName}</p>
            <select
              className={styles.modal__select}
              name="privacity"
              onChange={onInputChange}
              value={privacity}
            >
              <option value="Publico">Publico</option>
              <option value="Amigos">Amigos</option>
              <option value="Solo yo">Solo yo</option>
            </select>
          </div>
        </div>
        <div className={styles.modal__textarea}>
          <textarea
            name="updatePost"
            onChange={onInputChange}
            placeholder="Editar publicación"
            value={updatePost}
          />
          <span className={styles.modal__count_text}>
            <p>{updatePost.length}</p>
          </span>
        </div>
        <div className={styles.modal__buttons}>
          <button disabled={startLoading} onClick={onUpdatePost}>
            {startLoading ? "Publicando..." : "Publicar"}
          </button>
          <button
            disabled={startLoading}
            onClick={() => setOpenUpdatePost(false)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </section>
  );
};
