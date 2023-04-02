import styles from "../cardPost.module.css";

export const ListImagesPost = ({ post }) => {
  return (
    <div
      className={styles.post__image_list}
      style={{
        gridTemplateColumns: `repeat(${
          post?.photosUrls?.length > 1 ? "2" : "0"
        }, 1fr)`,
      }}
    >
      {post?.photosUrls?.map((photo) => (
        <figure className={styles.post__content_photo} key={photo}>
          <img src={photo} alt="Imagen de la publicación" />
        </figure>
      ))}
    </div>
  );
};
