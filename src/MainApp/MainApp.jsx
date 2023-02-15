import { FormPost, CardPost } from "../posts";

import { SideMessage, SideBar } from "../SideBar";
import styles from "./mainApp.module.css";

export const MainApp = () => {
  return (
    <main className={styles.main__container}>
      <SideBar />
      <div className={styles.main__content_posts}>
        <FormPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      <SideMessage />
    </main>
  );
};
