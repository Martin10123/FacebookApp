import { Link } from "react-router-dom";

import styles from "../cardPost.module.css";

export const ListImagesPost = ({ idPost, listImages }) => {
  return (
    <Link to={`/photo/${idPost}`}>
      <div
        className={styles.post__image_list}
        style={{
          gridTemplateColumns: `repeat(${
            listImages?.length > 1 ? "2" : "0"
          }, 1fr)`,
        }}
      >
        {listImages?.map((photo) => (
          <figure className={styles.post__content_photo} key={photo}>
            <img src={photo} alt="Imagen de la publicación" />
          </figure>
        ))}
      </div>
    </Link>
  );
};
