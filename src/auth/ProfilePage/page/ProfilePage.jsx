import { CardPost, FormPost } from "../../../posts";
import { DetailsUser, ListFriendsUser, PhotosUserName } from "./";

import styles from "./profile.module.css";

export const ProfilePage = () => {
  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__content}>
        <PhotosUserName />

        <div className={styles.profile__contain_details_and_posts}>
          <div className={styles.profile__contents_other_info_user}>
            <DetailsUser />

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
