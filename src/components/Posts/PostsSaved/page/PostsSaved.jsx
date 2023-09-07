import { CardPostSave } from "../components/CardPostSave";
import { usePostsSaved } from "../hook/usePostsSaved";

import styles from "./postsSaved.module.css";

export const PostsSaved = () => {
  const {
    // Atributos
    error,
    getPostsSaved,
    infoUserActive,
    startLoading,
    users,

    // Metodos
    onReturnPage,
  } = usePostsSaved();

  return (
    <div className={styles.post_save__container}>
      <div className={styles.post_save__content}>
        <div className={styles.post_save__nav}>
          <i className="fa-solid fa-arrow-left" onClick={onReturnPage}></i>
          <p>Articulos guardados</p>
        </div>

        <div className={styles.post_save__sidenav_desk}>
          <h1>Guardados (todos)</h1>
        </div>

        <div className={styles.post_save__show_articles}>
          <h2>Articulos guardados</h2>

          {startLoading && (
            <div className="loading_box_dimension">
              <div className="spinner"></div>
            </div>
          )}

          {error && <p>Hubo un error al cargar las publicaciones</p>}

          <div className={styles.post_save__list_card}>
            {Object.entries(getPostsSaved || {}).map((post) => (
              <CardPostSave
                infoUserActive={infoUserActive}
                key={post[0]}
                post={{ idDoc: post[0], ...post[1] }}
                users={users}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsSaved;
