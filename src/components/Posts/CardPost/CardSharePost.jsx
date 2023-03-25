import { messi, photoUser } from "../../../assets";
import { CardLayout, CountReactions } from "../layout";

import styles from "./cardPost.module.css";

export const CardSharePost = () => {
  return (
    <CardLayout
      createdDate="2d"
      iconStyle="fa-solid fa-earth-americas"
      nameUser="Martin Elias!!"
      photoUser={photoUser}
    >
      <div className={styles.card_share__container}>
        <CardLayout
          createdDate="2d"
          iconStyle="fa-solid fa-earth-americas"
          nameUser="Martin Elias!"
          photoUser={photoUser}
          isCardShare={true}
        >
          <div className={styles.post__image}>
            <img src={messi} alt="Imagen de la publicación" />
          </div>
        </CardLayout>
      </div>

      <CountReactions />
    </CardLayout>
  );
};
