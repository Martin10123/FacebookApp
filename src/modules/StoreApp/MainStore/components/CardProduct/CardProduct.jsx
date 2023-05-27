import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logicVotes } from "../../../helpers";
import { SeeProductAlone } from "../SeeProductAlone/SeeProductAlone";

import styles from "./cardProduct.module.css";

export const CardProduct = ({ product, infoUserActive, users }) => {
  const navigate = useNavigate();
  const {
    category,
    idDoc,
    name,
    photoProduct,
    price,
    stateProduct,
    uid,
    username,
    votesGood,
  } = product;
  const [openSendMessage, setOpenSendMessage] = useState(false);
  const [openViewProductAlone, setOpenViewProductAlone] = useState(false);
  const user = users.find((user) => user.uid === uid);

  const typeLike = votesGood?.includes(infoUserActive?.uid)
    ? "votesBad"
    : "votesGood";

  const onLikeToProduct = async () => {
    try {
      await logicVotes(
        product,
        typeLike,
        infoUserActive?.uid,
        `storeApp/${idDoc}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.card__content_card}>
        <figure
          className={styles.card__image}
          onClick={() => setOpenViewProductAlone(true)}
        >
          <img src={photoProduct} alt="Producto" />
        </figure>

        <div className={styles.card__info_product}>
          <div
            className={styles.card__prices_state_product}
            onClick={() => setOpenViewProductAlone(true)}
          >
            <p className={styles.card__name_product}>{name}</p>

            <p>$ {Number(price).toLocaleString()}</p>
            <p>{category}</p>
            <p>{stateProduct}</p>
          </div>

          <div className={styles.card__buttons_products}>
            <button
              className={styles.card__button_product}
              onClick={() => navigate(`/${username}`)}
            >
              <i className="fa-regular fa-circle-user"></i>
            </button>

            {infoUserActive?.uid === uid ? (
              <div></div>
            ) : (
              <button
                className={styles.card__button_product}
                onClick={() => setOpenSendMessage(true)}
              >
                <i className="fa-regular fa-message"></i>
              </button>
            )}
            <button
              className={styles.card__button_product}
              onClick={onLikeToProduct}
            >
              <i
                className="fa-solid fa-heart"
                style={{ color: typeLike === "votesBad" ? "red" : "" }}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {openViewProductAlone && (
        <SeeProductAlone
          product={product}
          setOpenViewProductAlone={setOpenViewProductAlone}
          uidUserActive={infoUserActive?.uid}
        />
      )}
    </>
  );
};
