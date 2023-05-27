import { ArticlePreview } from "../../";
import { useFormProduct } from "../../Hook/useFormProduct";
import { FormProduct } from "../components";

import styles from "../selfArticle.module.css";

const valuesUpdate = {
  nameU: "",
  priceU: "",
  productDescU: "",
  categoryU: "",
  stateProductU: "",
  photoProductU: "",
};

export const SelfArticle = ({ setOpenSelfArticles }) => {
  const {
    // Atributos
    category,
    formState,
    formSubmitted,
    formValidation,
    isFormValid,
    photoProduct,
    startLoadingLogin,
    stateProduct,

    // Metodos
    onInputChange,
    onSubmitFormStore,
    setCategory,
    setPhotoProduct,
    setStateProduct,
  } = useFormProduct({ valuesUpdate, setOpenSelfArticles });

  return (
    <div className={styles.self__content_self_preview}>
      <div className={styles.self__container}>
        <div className={styles.self__nav_return}>
          <div className={styles.self__return}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenSelfArticles(false)}
            ></i>
            <p>Nueva publicación</p>
          </div>
          <div
            className={styles.self__button_post}
            disabled={startLoadingLogin}
            onClick={onSubmitFormStore}
          >
            <button>{startLoadingLogin ? "Cargando" : "Publicar"}</button>
          </div>
        </div>

        <FormProduct
          category={category}
          formState={formState}
          formSubmitted={formSubmitted}
          formValidation={formValidation}
          onInputChange={onInputChange}
          photoProduct={photoProduct}
          setCategory={setCategory}
          setPhotoProduct={setPhotoProduct}
          setStateProduct={setStateProduct}
          stateProduct={stateProduct}
          isFormValid={isFormValid}
        />
      </div>

      <ArticlePreview
        category={category}
        formState={formState}
        photoProduct={photoProduct}
        stateProduct={stateProduct}
      />
    </div>
  );
};
