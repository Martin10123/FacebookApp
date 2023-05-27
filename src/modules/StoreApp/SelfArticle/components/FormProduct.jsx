import { useRef, useState } from "react";
import { FilterOptions } from "../../FilterOptions/FilterOptions";
import { categoriesStoreSelf, state_product } from "../../helpers";
import { MessageError } from "../../MessageError/MessageError";

import styles from "../selfArticle.module.css";

export const FormProduct = ({
  category,
  formState,
  formSubmitted,
  formValidation,
  onInputChange,
  photoProduct,
  setCategory,
  setPhotoProduct,
  setStateProduct,
  stateProduct,
  isUpdateValues,
}) => {
  const [openCategories, setopenCategories] = useState(false);
  const [openState, setopenState] = useState(false);
  const fileInputRef = useRef();

  const { name, price, productDesc } = formState;
  const { nameValid, priceValid, productDescValid } = formValidation;

  return (
    <div className={styles.self__form}>
      <div
        className={styles.self__option_product}
        onClick={() => fileInputRef.current.click()}
      >
        <i className="fa-solid fa-circle-plus"></i>
        <p>{photoProduct ? "1 foto" : "Agregar imagen"}</p>
      </div>

      {!isUpdateValues && (
        <MessageError
          textError="Suba una foto del producto"
          errorActive={!photoProduct && formSubmitted}
        />
      )}

      <input
        id="inputStore"
        onChange={({ target }) => setPhotoProduct(target.files[0])}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
      />

      <input
        className={styles.self__input_form}
        name="name"
        onChange={onInputChange}
        placeholder="Nombre del producto..."
        type="text"
        value={name}
      />

      <MessageError
        textError={nameValid || ""}
        errorActive={!!nameValid && formSubmitted}
      />

      <input
        className={styles.self__input_form}
        name="price"
        onChange={onInputChange}
        placeholder="Precio..."
        type="number"
        value={price}
      />

      <MessageError
        textError={priceValid || ""}
        errorActive={!!priceValid && formSubmitted}
      />

      <div
        className={styles.self__option_product}
        onClick={() => setopenCategories(true)}
      >
        <p>{category || "Categoria"}</p>
        <i className="fa-solid fa-caret-down"></i>
      </div>

      <MessageError
        textError="Elige una categoria"
        errorActive={category.trim() === "" && formSubmitted}
      />

      {openCategories && (
        <FilterOptions
          choosedBefore={[category]}
          data={categoriesStoreSelf}
          onSelectData={setCategory}
          setOpenFilter={setopenCategories}
        />
      )}

      <div
        className={styles.self__option_product}
        onClick={() => setopenState(true)}
      >
        <p>{stateProduct || "Estado"}</p>
        <i className="fa-solid fa-caret-down"></i>
      </div>

      <MessageError
        textError="Elige un estado para el producto"
        errorActive={stateProduct.trim() === "" && formSubmitted}
      />

      {openState && (
        <FilterOptions
          choosedBefore={[stateProduct]}
          data={state_product}
          onSelectData={setStateProduct}
          setOpenFilter={setopenState}
        />
      )}

      <textarea
        className={styles.self__textarea_desc}
        name="productDesc"
        onChange={onInputChange}
        placeholder="Descripción del producto..."
        value={productDesc}
      />

      <MessageError
        textError={productDescValid || ""}
        errorActive={!!productDescValid && formSubmitted}
      />
    </div>
  );
};
