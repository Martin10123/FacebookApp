import { useContext, useState } from "react";

import { AuthUserContext } from "../../../../context";
import { ButtonsReactions, CardLayout, CountReactions } from "../../layout";
import { getTextPost } from "../helper/getTextPost";
import { getTimeAgo } from "../../../../helpers";
import { ListImagesPost, SharePost } from "../..";
import { photoUser } from "../../../../assets";

export const CardPost = ({ post }) => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const [openSharePost, setOpenSharePost] = useState(false);

  const userCreatePost = users.find((user) => user?.uid === post?.uid);

  return (
    <>
      <CardLayout
        createdDate={getTimeAgo(post?.date)}
        iconStyle="fa-solid fa-earth-americas"
        nameUser={userCreatePost?.displayName}
        photoUser={userCreatePost?.photoUrl || photoUser}
        textPost={getTextPost({ post }) || ""}
        usernameProfile={userCreatePost?.username}
      >
        {post.photosUrls.length !== 0 && <ListImagesPost post={post} />}

        <CountReactions post={post} />

        <ButtonsReactions
          post={post}
          infoUserActive={infoUserActive}
          setOpenSharePost={setOpenSharePost}
        />
      </CardLayout>

      {openSharePost && (
        <SharePost
          infoUserActive={infoUserActive}
          post={post}
          setOpenSharePost={setOpenSharePost}
        />
      )}
    </>
  );
};
