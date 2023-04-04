import { CardPost, FormPost, CardSharePost } from "../../../../components";
import { DetailsUser } from "../DetailsUser/DetailsUser";
import { ListFriendsUser } from "../ListFriendsUsers/ListFriendsUser";
import { PhotosUserName } from "../PhotosUserName/PhotosUserName";
import { EditProfile, YourFriends } from "../../components";
import { useProfile } from "../../hook";

import styles from "./profilePage.module.css";

export const ProfilePage = () => {
  const {
    currentUserFriendsList,
    friendsList,
    getPosts,
    infoUserActive,
    isUserActive,
    matchedUser,
    openEditProfile,
    openYourFriends,
    otherUserFriendsList,
    searchFriendListByUid,
    setOpenEditProfile,
    setOpenYourFriends,
    startLoading,
  } = useProfile();

  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__content}>
        <PhotosUserName
          isUserActive={isUserActive}
          matchedUser={matchedUser}
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
                    matchedUser?.uid === post?.uid && (
                      <div key={post.idDoc}>
                        {!post.isShared ? (
                          <CardPost post={post} />
                        ) : (
                          <CardSharePost post={post} />
                        )}
                      </div>
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
    </div>
  );
};
