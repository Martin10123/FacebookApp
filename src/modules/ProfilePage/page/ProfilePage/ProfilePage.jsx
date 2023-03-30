import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthUserContext, GetPostsContext } from "../../../../context";
import { CardPost, FormPost } from "../../../../components";
import { DetailsUser } from "../DetailsUser/DetailsUser";
import { ListFriendsUser } from "../ListFriendsUsers/ListFriendsUser";
import { PhotosUserName } from "../PhotosUserName/PhotosUserName";

import styles from "./profilePage.module.css";
import { EditProfile, YourFriends } from "../../components";

export const ProfilePage = () => {
  const {
    infoUserActive,
    currentUserFriendsList,
    searchFriendListByUid,
    searchUserByUsername,
    userActive,
    users,
  } = useContext(AuthUserContext);
  const { getPosts, startLoading } = useContext(GetPostsContext);
  const { username } = useParams();
  const matchedUser = searchUserByUsername(username);

  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openYourFriends, setOpenYourFriends] = useState(false);
  const otherUserFriendsList = searchFriendListByUid(matchedUser.uid);
  const friendsList = users.filter((user) =>
    otherUserFriendsList.friendsList.includes(user.uid)
  );

  const isUserActive = matchedUser?.uid === userActive?.uid;

  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__content}>
        <PhotosUserName
          currentUserFriendsList={currentUserFriendsList}
          infoUserActive={infoUserActive}
          isUserActive={isUserActive}
          matchedUser={matchedUser}
          searchFriendListByUid={searchFriendListByUid}
          setOpenEditProfile={setOpenEditProfile}
        />

        <div className={styles.profile__contain_details_and_posts}>
          <div className={styles.profile__contents_other_info_user}>
            <DetailsUser
              isUserActive={isUserActive}
              matchedUser={matchedUser}
              setOpenEditProfile={setOpenEditProfile}
            />

            <ListFriendsUser
              friendsList={friendsList}
              otherUserFriendsList={otherUserFriendsList}
              setOpenYourFriends={setOpenYourFriends}
            />
          </div>

          <div className={styles.profile__content_form_post}>
            <FormPost />

            {startLoading ? (
              <div className={styles.profile__content_spinner}>
                <div className="spinner"></div>
              </div>
            ) : (
              <>
                {getPosts.map(
                  (post) =>
                    infoUserActive?.uid === post?.uid && (
                      <CardPost key={post.idDoc} post={post} />
                    )
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {openEditProfile && (
        <EditProfile
          isUserActive={isUserActive}
          setOpenEditProfile={setOpenEditProfile}
          matchedUser={matchedUser}
        />
      )}

      {openYourFriends && (
        <YourFriends
          currentUserFriendsList={currentUserFriendsList}
          friendsList={friendsList}
          matchedUser={matchedUser}
          otherUserFriendsList={otherUserFriendsList}
          searchFriendListByUid={searchFriendListByUid}
          setOpenYourFriends={setOpenYourFriends}
        />
      )}

      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
