import { toast } from "react-hot-toast";

import { useOptionsPost } from "../../CardPost/hook/useOptionsPost";

import styles from "./components.module.css";

export const OptionsPostSave = ({
  infoUserActive,
  isNearHeight,
  onNavigateShowPost,
  onOpenSharePost,
  post,
  refOptions,
  userCreatePost,
}) => {
  const { onSavePost } = useOptionsPost({
    infoUserActive,
    post,
    setOpenOptions: () => {},
  });

  const onCopyUrlPost = () => {
    navigator.clipboard.writeText(
      `/${userCreatePost.displayName}/post/${post.idDoc}`
    );

    toast.success("Copiaste este enlace");
  };

  return (
    <div
      className={`${styles.post_save__options} ${
        isNearHeight ? styles.post_save__top_options : ""
      }`}
    >
      <ul className={styles.post_save__list} ref={refOptions}>
        <li className={styles.post_save__item} onClick={onOpenSharePost}>
          <i className="fa-solid fa-share-from-square"></i>Compartir
        </li>
        <li className={styles.post_save__item}>
          <i className="fa-brands fa-facebook-messenger"></i>Enviar por mensaje
        </li>
        <li className={styles.post_save__item} onClick={onNavigateShowPost}>
          <i className="fa-solid fa-newspaper"></i>Ver publicación original
        </li>
        <li className={styles.post_save__item} onClick={onCopyUrlPost}>
          <i className="fa-regular fa-copy"></i>Copiar enlace
        </li>
        <li className={styles.post_save__item} onClick={onSavePost}>
          <i className="fa-solid fa-file-excel"></i>Eliminar
        </li>
      </ul>
    </div>
  );
};
