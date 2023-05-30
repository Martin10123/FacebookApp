import { InputForm } from "../../Auth";
import { useMainStore } from "../Hook";
import { CardProduct } from "../MainStore/components";

import styles from "./favoritesProducts.module.css";

export const FavoritesProducts = ({ setOpenViewFavorites }) => {
  const {
    // Atributos
    infoUserActive,
    productsFilter,
    searchProduct,
    users,

    // Metodos
    setSearchProduct,
  } = useMainStore();

  const showOnlyProductFavorites = productsFilter.filter((product) =>
    product?.votesGood?.includes(infoUserActive.uid)
  );

  return (
    <div className={styles.favorites__container}>
      <div className={styles.favorites__content}>
        <span className={styles.favorites__content_title}>
          <h2>Favoritos</h2>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setOpenViewFavorites(false)}
          ></i>
        </span>

        <InputForm
          onChange={({ target }) => setSearchProduct(target.value)}
          placeholder="Buscar..."
          styleIcon="fa-solid fa-magnifying-glass"
          value={searchProduct}
        />

        {showOnlyProductFavorites.length !== 0 ? (
          <div className={styles.favorites__list}>
            {showOnlyProductFavorites.map((product) => (
              <CardProduct
                key={product.idDoc}
                product={product}
                infoUserActive={infoUserActive}
                users={users}
              />
            ))}
          </div>
        ) : (
          <p className={styles.not_vacations_by_filter}>
            No se ha agregado ninguna producto a favoritos
          </p>
        )}
      </div>
    </div>
  );
};
