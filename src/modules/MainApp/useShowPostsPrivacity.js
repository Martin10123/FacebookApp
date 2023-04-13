import { useContext } from "react";
import { AuthUserContext, GetPostsContext } from "../../context";

export const useShowPostsPrivacity = () => {
  const { getPosts, startLoading } = useContext(GetPostsContext);
  const { friendsEachUsers, infoUserActive, users } =
    useContext(AuthUserContext);

  const savePostByPrivacity = getPosts.filter((post) => {
    if (post.privacity === "Publico") {
      return post;
    } else if (post.privacity === "Solo amigos") {
      const { friendsList } = friendsEachUsers?.find(
        (listFriends) => listFriends.uidDocUser === infoUserActive?.uid
      );

      const isFriend =
        friendsList?.includes(post.uid) || infoUserActive?.uid === post.uid;

      return isFriend && post;
    } else if (post.privacity === "Solo yo") {
      return infoUserActive?.uid === post.uid && post;
    }
  });

  return { savePostByPrivacity, startLoading };
};
