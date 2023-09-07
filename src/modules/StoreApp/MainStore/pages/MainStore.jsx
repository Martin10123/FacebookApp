import { CardProduct, SideBar } from "../components";
import { useMainStore } from "../../Hook";

import styles from "./mainStore.module.css";

export const MainStore = () => {
  const {
    // Atributos
    infoUserActive,
    loadingProducts,
    openSideBar,
    productsFilter,
    searchProduct,
    users,

    // Metodos
    setOpenSideBar,
    setSearchProduct,
  } = useMainStore();

  return (
    <section className={styles.container}>
      <SideBar
        infoUserActive={infoUserActive}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />

      <div className={styles.content_info}>
        <nav className={styles.content_nav}>
          <i
            className="fa-solid fa-bars-staggered"
            onClick={() => setOpenSideBar(true)}
          ></i>
          <p>Store</p>
          <p></p>
        </nav>

        <div className={styles.form}>
          <input
            className={styles.input_form}
            onChange={({ target }) => setSearchProduct(target.value)}
            placeholder="Buscar..."
            type="text"
            value={searchProduct}
          />
        </div>

        <div className={styles.title}>
          <p>Productos</p>
        </div>

        {loadingProducts ? (
          <p className={styles.not_vacations_by_filter}>
            Cargando productos...
          </p>
        ) : (
          <>
            {productsFilter.length !== 0 ? (
              <div className={styles.container_card}>
                {productsFilter.map((product) => (
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
                No se ha agregado ninguna producto
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MainStore;
