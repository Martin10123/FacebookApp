import { useContext } from "react";
import { photoUser } from "../../../assets";
import { AuthUserContext, GetPostsContext } from "../../../context";
import { getTimeAgo } from "../../../helpers";
import { ButtonsReactions, CardLayout, CountReactions } from "../layout";

import styles from "./cardPost.module.css";

export const CardPost = ({ post }) => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const { getReactionsPosts } = useContext(GetPostsContext);

  const userCreatePost = users.find((user) => user?.uid === post?.uid);
  const foundPost = getReactionsPosts.find(
    (postReaction) => postReaction.idDoc === post.idDoc
  );

  return (
    <CardLayout
      createdDate={getTimeAgo(post?.date)}
      iconStyle="fa-solid fa-earth-americas"
      nameUser={userCreatePost?.displayName}
      photoUser={userCreatePost?.photoUrl || photoUser}
      textPost={post?.post || ""}
      usernameProfile={userCreatePost?.username}
    >
      <div
        className={styles.post__image_list}
        style={{
          gridTemplateColumns: `repeat(${
            post?.photosUrls.length > 1 ? "2" : "0"
          }, 1fr)`,
        }}
      >
        {post?.photosUrls.map((photo) => (
          <figure className={styles.post__content_photo} key={photo}>
            <img src={photo} alt="Imagen de la publicación" />
          </figure>
        ))}
      </div>

      <CountReactions foundPost={foundPost} />

      <ButtonsReactions
        foundPost={foundPost}
        idDocPost={post.idDoc}
        infoUserActive={infoUserActive}
      />
    </CardLayout>
  );
};
