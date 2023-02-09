import { messi, photoUser } from "../../assets";
import { CardLayout } from "./layout/CardLayout";

import styles from "./cardPost.module.css";

export const CardPost = () => {
  return (
    <CardLayout
      createdDate="2d"
      iconStyle="fa-solid fa-earth-americas"
      nameUser="Martin Elias"
      photoUser={photoUser}
    >
      <div className="post__image">
        <img width="100%" src={messi} alt="Imagen de la publicación" />
      </div>
    </CardLayout>
  );
};
