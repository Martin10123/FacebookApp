import { SeeProductAlone } from "../SeeProductAlone/SeeProductAlone";
import { ModalSentMessage } from "../../../../MessagesApp";
import { useCardProduct } from "../../../Hook";

import styles from "./cardProduct.module.css";

export const CardProduct = ({ product, infoUserActive, users }) => {
  const {
    // Atributos
    category,
    name,
    openSendMessage,
    openViewProductAlone,
    photoProduct,
    price,
    stateProduct,
    typeLike,
    uid,
    user,
    username,

    // Metodos
    navigate,
    onLikeToProduct,
    setOpenSendMessage,
    setOpenViewProductAlone,
  } = useCardProduct({ infoUserActive, product, users });

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

      {openSendMessage && (
        <ModalSentMessage
          matchedUser={user}
          setOpenMessange={setOpenSendMessage}
          messagePrede={`Hola ${user.displayName} estoy interesado en su producto, ¿me podria brindar más información?`}
        />
      )}
    </>
  );
};
