import { messi, photoUser } from "../../assets";
import { CardLayout, CountReactions } from "../layout";

import styles from "./cardPost.module.css";

export const CardPost = () => {
  return (
    <CardLayout
      createdDate="2d"
      iconStyle="fa-solid fa-earth-americas"
      nameUser="Martin Elias"
      photoUser={photoUser}
    >
      <div className={styles.post__image}>
        <img src={messi} alt="Imagen de la publicación" />
      </div>

      <CountReactions />
    </CardLayout>
  );
};
