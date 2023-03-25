import {
  CardPost,
  CardSharePost,
  FormPost,
  SideBar,
  SideMessage,
} from "../../components";
import { HistoryPage } from "../Historys/pages/HistoryPage";

import styles from "./mainApp.module.css";

export const MainApp = () => {
  return (
    <main className={styles.main__container}>
      <SideBar />
      <div className={styles.main__content_posts}>
        <FormPost />
        <HistoryPage />
        <CardPost />
        <CardSharePost />
      </div>
      <SideMessage />
    </main>
  );
};
