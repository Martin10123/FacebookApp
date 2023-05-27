import styles from "./articlePreview.module.css";

const ListItem = ({ title }) => {
  return <p className={styles.preview__price}>{title}</p>;
};

export const ArticlePreview = ({
  category,
  formState,
  photoProduct,
  stateProduct,
}) => {
  const { name, price, productDesc } = formState;

  return (
    <div className={styles.preview__content_preview}>
      <div className={styles.preview__preview_box}>
        <h2>Vista previa</h2>
        <div className={styles.preview__preview_info}>
          {photoProduct ? (
            <figure className={styles.preview__figure_photo}>
              <img
                src={URL.createObjectURL(photoProduct)}
                alt="Imagen del producto"
              />
            </figure>
          ) : (
            <div className={styles.preview__content_message}>
              <span>Vista previa de tu publicación</span>
              <p>
                A medida que crees la publicación, podras ver que aspecto tendrá
                en la store
              </p>
            </div>
          )}

          <div className={styles.preview__info_product}>
            <h3 className={styles.preview__title}>{name || "Titulo"}</h3>

            <ListItem
              title={`$ ${Number(price).toLocaleString()}` || "Precio"}
            />

            <ListItem title="publicado en Colombia" />

            <ListItem title={category || "Categoria"} />

            <ListItem title={stateProduct || "Estado"} />

            <div className={styles.preview__content_desc}>
              <p>{productDesc || "Descripción"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
