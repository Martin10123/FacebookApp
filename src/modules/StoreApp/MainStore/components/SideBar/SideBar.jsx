import { useState } from "react";
import { photoUser } from "../../../../../assets";
import { SelfArticle, FavoritesProducts } from "../../..";

import styles from "./sideBar.module.css";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ infoUserActive, openSideBar, setOpenSideBar }) => {
  const [openSelfArticles, setOpenSelfArticles] = useState(false);
  const [openViewFavorites, setOpenViewFavorites] = useState(false);
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/${infoUserActive.username}`);
  };

  return (
    <>
      <div
        className={`${styles.side__container_side} ${
          openSideBar ? styles.side__show_side : ""
        }`}
      >
        <div className={styles.side__list}>
          <figure className={styles.side__image_user}>
            <img
              alt="Foto de perfil"
              onClick={goToProfile}
              src={infoUserActive.photoUrl || photoUser}
            />
            <figcaption onClick={goToProfile}>
              {infoUserActive.displayName}
            </figcaption>
            <button
              className={styles.side__back_color}
              onClick={() => setOpenSideBar(false)}
            >
              X
            </button>
          </figure>

          <div className={styles.side__content_all_item}>
            <div
              className={styles.side__list_item}
              onClick={() => setOpenSelfArticles(true)}
            >
              <i className="fa-solid fa-tags"></i>
              <p>Vender articulo</p>
            </div>
            <div
              className={styles.side__list_item}
              onClick={() => setOpenViewFavorites(true)}
            >
              <i className="fa-solid fa-heart"></i>
              <p>Favoritos</p>
            </div>
          </div>
        </div>
      </div>

      {openSelfArticles && (
        <SelfArticle setOpenSelfArticles={setOpenSelfArticles} />
      )}

      {openViewFavorites && (
        <FavoritesProducts setOpenViewFavorites={setOpenViewFavorites} />
      )}
    </>
  );
};
