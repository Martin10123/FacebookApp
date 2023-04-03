import { useContext, useState } from "react";

import { AuthUserContext } from "../../../../context";
import { ButtonsReactions, CardLayout, CountReactions } from "../../layout";
import { ListImagesPost, SharePost } from "../..";

export const CardPost = ({ post }) => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const [openSharePost, setOpenSharePost] = useState(false);

  const userCreatePost = users.find((user) => user?.uid === post?.uid);

  return (
    <>
      <CardLayout
        infoUserActive={infoUserActive}
        post={post}
        userCreatePost={userCreatePost}
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
