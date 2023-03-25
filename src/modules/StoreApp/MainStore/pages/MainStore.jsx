import { useState } from "react";
import { CardProduct, SideBar } from "../components";

import styles from "./mainStore.module.css";

export const MainStore = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <section className={styles.container}>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

      <div className={styles.content_info}>
        <nav className={styles.content_nav}>
          <i
            className="fa-solid fa-bars-staggered"
            onClick={() => setOpenSideBar(true)}
          ></i>
          <p>Store</p>
          <i className="fa-solid fa-tags"></i>
        </nav>

        <div className={styles.form}>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.input_form}
          />
        </div>

        <div className={styles.title}>
          <p>Productos</p>
        </div>

        <div className={styles.container_card}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>

        {/* <p className={styles.not_vacations_by_filter}>
            No se ha agregado ninguna producto
          </p> */}
      </div>
    </section>
  );
};
