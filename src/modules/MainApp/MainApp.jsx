import {
  CardPost,
  CardSharePost,
  FormPost,
  SideBar,
  SideMessage,
} from "../../components";
import { HistoryPage } from "../Historys/pages/HistoryPage";
import { useShowPostsPrivacity } from "./useShowPostsPrivacity";

import styles from "./mainApp.module.css";

export const MainApp = () => {
  const { savePostByPrivacity, startLoading } = useShowPostsPrivacity();

  return (
    <main className={styles.main__container}>
      <SideBar />
      <div className={styles.main__content_posts}>
        <FormPost />
        <HistoryPage />

        {startLoading ? (
          <div className={styles.profile__content_spinner}>
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            {savePostByPrivacity.map((post) => (
              <div key={post.idDoc}>
                {!post.isShared ? (
                  <CardPost post={post} />
                ) : (
                  <CardSharePost post={post} />
                )}
              </div>
            ))}
          </>
        )}
      </div>
      <SideMessage />
    </main>
  );
};
