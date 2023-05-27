import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardProduct, SideBar } from "../components";
import { AuthUserContext } from "../../../../context";

import styles from "./mainStore.module.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firebaseDB } from "../../../../services";
import { getProductByAny } from "../../helpers";

export const MainStore = () => {
  const { users, infoUserActive } = useContext(AuthUserContext);

  const [openSideBar, setOpenSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const docRef = query(
      collection(firebaseDB, "storeApp"),
      orderBy("name", "asc")
    );

    const unSuscribed = onSnapshot(docRef, (product) => {
      const productsColection = product.docs.map((doc) => {
        return {
          idDoc: doc.id,
          ...doc.data(),
        };
      });

      setProducts(productsColection);
    });

    return () => unSuscribed();
  }, []);

  const productsFilter = useMemo(
    () => getProductByAny(products, searchProduct),
    [products, searchProduct]
  );

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
      </div>
    </section>
  );
};
