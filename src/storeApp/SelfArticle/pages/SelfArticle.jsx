import { ArticlePreview } from "../../";

import { FormProduct } from "../components";

import styles from "../selfArticle.module.css";

export const SelfArticle = () => {
  return (
    <div className={styles.self__content_self_preview}>
      <div className={styles.self__container}>
        <div className={styles.self__nav_return}>
          <div className={styles.self__return}>
            <i className="fa-solid fa-arrow-left"></i>
            <p>Nueva publicación</p>
          </div>
          <div className={styles.self__button_post}>
            <button>Publicar</button>
          </div>
        </div>

        <FormProduct />
      </div>

      <ArticlePreview />
    </div>
  );
};
