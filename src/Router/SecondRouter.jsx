import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ChatAppPage,
  MainApp,
  MainStore,
  ModalImagesPost,
  ProfilePage,
  SeeHistory,
  SelectTypeHistory,
} from "../modules";
import {
  InformationPrivacity,
  MenuApp,
  Navbar,
  ShowPostAlone,
  WindownNotifications,
} from "../components";
import FriendsRequest from "../components/Friends/FriendsRequests/FriendsRequest";
import PostsSaved from "../components/Posts/PostsSaved/page/PostsSaved";

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

        <Route path="/:name/post/:post_id" element={<ShowPostAlone />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/stories/:uidUser/:numStorie?" element={<SeeHistory />} />
        <Route path="/photo/:post_id" element={<ModalImagesPost />} />
        <Route path="/friends" element={<FriendsRequest />} />
        <Route path="/infoPrivacity" element={<InformationPrivacity />} />
        <Route path="/saved" element={<PostsSaved />} />
        <Route path="/store" element={<MainStore />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
