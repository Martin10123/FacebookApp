import { login, messi, recover, register } from "../../../../assets";
import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";

import styles from "./imagesHistory.module.css";

const images = [messi, login, register, recover];

export const ImagesHistory = () => {
  return (
    <LayoutCreateHistory
      isCreate={true}
      style={{
        background:
          "linear-gradient(0deg, rgba(60,60,60,1) 35%, rgba(48,48,48,1) 70%)",
      }}
    >
      <ImagesItems />
    </LayoutCreateHistory>
  );
};

export const ImagesItems = () => {
  return (
    <div className={styles.image_history__list}>
      {images.map((image) => (
        <figure key={image} className={styles.image_history__img_item}>
          <img src={image} alt="Fotos seleccionadas" />
        </figure>
      ))}
    </div>
  );
};
