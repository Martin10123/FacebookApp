import { useContext, useEffect, useMemo, useState } from "react";
import { AuthUserContext } from "../../../context";
import { reactionsDataPost } from "../../../components/Posts/helpers";
import { useCountReactionsPost } from "../../../components/Posts/hook";

export const useListReactions = ({ listReactionsUse }) => {
  const { users, infoUserActive, friendsEachUsers } =
    useContext(AuthUserContext);
  const [listUserReactions, setListUserReactions] = useState([]);
  const [filterReactionBy, setFilterReactionBy] = useState("");
  const { countReactions, totalReactions } = useCountReactionsPost({
    post: listReactionsUse,
  });

  useEffect(() => {
    const usersWithReactions = reactionsDataPost
      .map(({ tofire, img }) => {
        const reaction = listReactionsUse.reactions[tofire];
        if (reaction && reaction.length > 0) {
          const user = users.find(({ uid }) => uid === reaction[0]);
          if (user) {
            return {
              displayName: user.displayName,
              photoUrl: user.photoUrl,
              reactionImg: img,
              reactionName: tofire,
              uid: user.uid,
              username: user.username,
            };
          }
        }
        return null;
      })
      .filter((user) => user !== null);

    setListUserReactions(usersWithReactions);
  }, []);

  const filteredReactions = useMemo(() => {
    if (filterReactionBy === "") return listUserReactions;

    return listUserReactions.filter((reaction) =>
      reaction.reactionName.toLocaleLowerCase().includes(filterReactionBy)
    );
  }, [filterReactionBy, listUserReactions]);

  return {
    // Atributos
    countReactions,
    filteredReactions,
    filterReactionBy,
    infoUserActive,
    totalReactions,
    friendsEachUsers,

    // Metodos
    setFilterReactionBy,
  };
};
