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
    const usersWithReactions = reactionsDataPost.flatMap(({ tofire, img }) => {
      const reaction = listReactionsUse?.reactions[tofire];

      if (reaction && reaction.length !== 0) {
        return reaction.map((uidUserReaction) => {
          const userFind = users.find(
            (userFound) => userFound.uid === uidUserReaction
          );

          return {
            displayName: userFind.displayName,
            photoUrl: userFind.photoUrl,
            reactionImg: img,
            reactionName: tofire,
            uid: userFind.uid,
            username: userFind.username,
          };
        });
      }

      return [];
    });

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
