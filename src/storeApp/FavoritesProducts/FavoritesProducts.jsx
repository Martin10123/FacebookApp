import { InputForm } from "../../auth";
import { CardProduct } from "../MainStore/components";

import styles from "./favoritesProducts.module.css";

export const FavoritesProducts = () => {
  return (
    <div className={styles.favorites__container}>
      <h2>Favoritos</h2>

      <InputForm placeholder="Buscar..." />

      <div className={styles.favorites__list}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};
