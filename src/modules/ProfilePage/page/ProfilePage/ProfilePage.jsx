import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthUserContext } from "../../../../context";
import { CardPost, FormPost } from "../../../../components";
import { DetailsUser } from "../DetailsUser/DetailsUser";
import { ListFriendsUser } from "../ListFriendsUsers/ListFriendsUser";
import { PhotosUserName } from "../PhotosUserName/PhotosUserName";

import styles from "./profilePage.module.css";

export const ProfilePage = () => {
  const {
    infoUserActive,
    currentUserFriendsList,
    searchFriendListByUid,
    searchUserByUsername,
    userActive,
  } = useContext(AuthUserContext);
  const { username } = useParams();

  const matchedUser = searchUserByUsername(username);

  const isUserActive = matchedUser?.uid === userActive?.uid;

  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__content}>
        <PhotosUserName
          currentUserFriendsList={currentUserFriendsList}
          infoUserActive={infoUserActive}
          isUserActive={isUserActive}
          searchFriendListByUid={searchFriendListByUid}
          matchedUser={matchedUser}
        />

        <div className={styles.profile__contain_details_and_posts}>
          <div className={styles.profile__contents_other_info_user}>
            <DetailsUser
              isUserActive={isUserActive}
              matchedUser={matchedUser}
            />

            <ListFriendsUser />
          </div>

          <div className={styles.profile__content_form_post}>
            <FormPost />

            <CardPost />
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
