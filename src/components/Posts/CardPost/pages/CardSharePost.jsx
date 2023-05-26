import { useContext, useState } from "react";

import { AuthUserContext } from "../../../../context";
import { ButtonsReactions, CardLayout, CountReactions } from "../../layout";
import { ListImagesPost, SharePost } from "../../..";
import { BoxComments } from "../../../../modules";

import styles from "../cardPost.module.css";

export const CardSharePost = ({ post }) => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const [openSharePost, setOpenSharePost] = useState(false);
  const [openCommentsPost, setOpenCommentsPost] = useState(false);

  const userCreatePost = users.find((user) => user?.uid === post?.uid);
  const userCreatePostShared = users.find(
    (user) => user?.uid === post?.postShared?.uid
  );

  return (
    <>
      <CardLayout
        infoUserActive={infoUserActive}
        post={post}
        userCreatePost={userCreatePost}
      >
        <div className={styles.card_share__container}>
          <CardLayout
            infoUserActive={infoUserActive}
            isCardShare={true}
            post={post}
            userCreatePost={userCreatePostShared}
          >
            {post?.photosUrls?.length !== 0 && (
              <ListImagesPost
                idPost={post?.postShared.idDoc}
                listImages={post?.postShared.photosUrls}
              />
            )}
          </CardLayout>
        </div>

        <CountReactions post={post} />

        <ButtonsReactions
          post={post}
          infoUserActive={infoUserActive}
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
