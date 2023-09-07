import { usePreventScroll } from "../../../../hooks";
import { useListReactions } from "../../hooks";
import { CardListReactionUser } from "./components/CardListReactionUser";

import styles from "./listReactions.module.css";

export const ListReactions = ({ listReactionsUse, setOpenListReactions }) => {
  usePreventScroll();

  const {
    // Atributos
    countReactions,
    filteredReactions,
    filterReactionBy,
    infoUserActive,
    totalReactions,
    friendsEachUsers,

    // Metodos
    setFilterReactionBy,
  } = useListReactions({ listReactionsUse });

  return (
    <div className={styles.list_reactions__container}>
      <div className={styles.list_reactions__content}>
        <div className={styles.list_reactions__nav}>
          <span>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenListReactions(false)}
            ></i>
            <p>Personas que reaccionaron</p>
          </span>
        </div>

        <div className={styles.list_reactions__count_reactions}>
          <div
            className={styles.list_reactions__item}
            onClick={() => setFilterReactionBy("")}
            style={{
              borderBottom: filterReactionBy === "" ? "3px solid #0099ff" : "",
            }}
          >
            <p>Todas {totalReactions}</p>
          </div>

          {countReactions.map(({ count, img, name, tofire }) => (
            <div
              className={styles.list_reactions__item}
              key={name}
              onClick={() => setFilterReactionBy(tofire)}
              style={{
                borderBottom:
                  filterReactionBy === tofire ? "3px solid #0099ff" : "",
              }}
            >
              <img src={img} alt={`foto de ${name}`} />
              <p>{count}</p>
            </div>
          ))}
        </div>

        <div className={styles.list_reactions__list_users}>
          {filteredReactions.map((userReaction) => (
            <CardListReactionUser
              friendsEachUsers={friendsEachUsers}
              infoUserActive={infoUserActive}
              key={userReaction.uid}
              userReaction={userReaction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
