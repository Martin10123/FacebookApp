import { FormProduct } from "../../../../SelfArticle/components";

import styles from "./editProduct.module.css";

export const EditProduct = () => {
  return (
    <div className={styles.edit_product}>
      <div className={styles.edit_content}>
        <FormProduct />

        <div className={styles.content_update_product}>
          <button className={styles.update_product_update}>Actualizar</button>
          <button className={styles.update_product_cancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
