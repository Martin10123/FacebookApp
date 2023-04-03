import { useContext, useState } from "react";

import { AuthUserContext } from "../../../../context";
import { ButtonsReactions, CardLayout, CountReactions } from "../../layout";
import { ListImagesPost, SharePost } from "../../..";

import styles from "../cardPost.module.css";

export const CardSharePost = ({ post }) => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const [openSharePost, setOpenSharePost] = useState(false);

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
              <ListImagesPost post={post?.postShared} />
            )}
          </CardLayout>
        </div>

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
