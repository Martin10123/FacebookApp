import { care, like, haha, angry, love, sad, wow } from "../../../assets";

import styles from "./layout.module.css";

const reactionsData = [
  { name: "Me gusta", img: like, classE: "profile__like" },
  { name: "Me encanta", img: love, classE: "profile__love" },
  { name: "Me importa", img: care, classE: "profile__care" },
  { name: "Me divierte", img: haha, classE: "profile__haha" },
  { name: "Me asombra", img: wow, classE: "profile__wow" },
  { name: "Me entristece", img: sad, classE: "profile__sad" },
  { name: "Me enoja", img: angry, classE: "profile__angry" },
];

export const ReactionsPost = () => {
  return (
    <div className={styles.reactions__container}>
      <div className={styles.reactions__content}>
        {reactionsData.map(({ name, img, classE }) => (
          <div className={styles.reactions__emoji} key={name}>
            <img src={img} alt={name} />
            <p className={styles[classE]}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
