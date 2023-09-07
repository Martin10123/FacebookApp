import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ChatAppPage,
  MainApp,
  ModalImagesPost,
  ProfilePage,
  SeeHistory,
  SelectTypeHistory,
} from "../modules";
import {
  MenuApp,
  Navbar,
  ShowPostAlone,
  WindownNotifications,
} from "../components";

// lazy
const SideBarOptions = lazy(() => import("../ModulesLazy/SideBarMenus"));

export const SecondRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/chats" element={<ChatAppPage />} />
        <Route path="/menu" element={<MenuApp />} />
        <Route path="/notifications" element={<WindownNotifications />} />
        <Route path="/stories/create" element={<SelectTypeHistory />} />

        {/* Lazy */}

        {/* <Route path="/*" element={<SideBarOptions />} /> */}

        <Route path="/:name/post/:post_id" element={<ShowPostAlone />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/stories/:uidUser/:numStorie?" element={<SeeHistory />} />
        <Route path="/photo/:post_id" element={<ModalImagesPost />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
