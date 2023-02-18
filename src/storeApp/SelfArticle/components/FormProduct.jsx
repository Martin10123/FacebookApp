import styles from "../selfArticle.module.css";

export const FormProduct = () => {
  return (
    <div className={styles.self__form}>
      <div className={styles.self__option_product}>
        <i className="fa-solid fa-circle-plus"></i>
        <p>Agregar imagen</p>
      </div>

      <input id="inputStore" type="file" style={{ display: "none" }} />

      <input
        className={styles.self__input_form}
        type="text"
        placeholder="Nombre del producto..."
        name="name"
      />

      <input
        className={styles.self__input_form}
        type="number"
        placeholder="Precio..."
        name="price"
      />

      <div className={styles.self__option_product}>
        <p>{"Categoria"}</p>
        <i className="fa-solid fa-caret-down"></i>
      </div>

      <div className={styles.self__option_product}>
        <p>{"Estado"}</p>
        <i className="fa-solid fa-caret-down"></i>
      </div>

      <textarea
        name="productDesc"
        placeholder="Descripción del producto..."
        className={styles.self__textarea_desc}
      />
    </div>
  );
};
