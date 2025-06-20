import { useContext, useState } from "react";

import { AuthUserContext } from "../../../../context";
import { BoxComments } from "../../../../modules";
import { ButtonsReactions, CardLayout, CountReactions } from "../../layout";
import { ListImagesPost, SharePost } from "../..";

export const CardPost = ({ post }) => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const [openSharePost, setOpenSharePost] = useState(false);
  const [openCommentsPost, setOpenCommentsPost] = useState(false);

  const userCreatePost = users.find((user) => user?.uid === post?.uid);

  return (
    <>
      <CardLayout
        infoUserActive={infoUserActive}
        post={post}
        userCreatePost={userCreatePost}
      >
        {post.photosUrls.length !== 0 && (
          <ListImagesPost idPost={post.idDoc} listImages={post?.photosUrls} />
        )}

        <CountReactions post={post} />

        <ButtonsReactions
          infoUserActive={infoUserActive}
          post={post}
          setOpenCommentsPost={setOpenCommentsPost}
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

      {openCommentsPost && (
        <BoxComments
          infoUserActive={infoUserActive}
          post={post}
          setOpenCommentsPost={setOpenCommentsPost}
          userCreatePost={userCreatePost}
          users={users}
        />
      )}
    </>
  );
};
