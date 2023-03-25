import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthUserContext } from "../../../context";
import { CardPost, FormPost } from "../../../posts";
import { DetailsUser } from "../DetailsUser/DetailsUser";
import { ListFriendsUser } from "../ListFriendsUsers/ListFriendsUser";
import { PhotosUserName } from "../PhotosUserName/PhotosUserName";

import styles from "./profilePage.module.css";

export const ProfilePage = () => {
  const { searchUserByUsername, userActive, infoUserActive } =
    useContext(AuthUserContext);
  const { username } = useParams();

  const userMatchUsername = searchUserByUsername(username);

  const isUserActive = userMatchUsername?.uid === userActive?.uid;

  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__content}>
        <PhotosUserName
          infoUserActive={infoUserActive}
          isUserActive={isUserActive}
          userMatchUsername={userMatchUsername}
        />

        <div className={styles.profile__contain_details_and_posts}>
          <div className={styles.profile__contents_other_info_user}>
            <DetailsUser
              isUserActive={isUserActive}
              userMatchUsername={userMatchUsername}
            />

            <ListFriendsUser />
          </div>

          <div className={styles.profile__content_form_post}>
            <FormPost />

            <CardPost />
          </div>
        </div>
      </div>
    </div>
  );
};
