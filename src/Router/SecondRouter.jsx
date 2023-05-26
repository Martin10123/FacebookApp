import { Navigate, Route, Routes } from "react-router-dom";
import {
  ChatAppPage,
  MainApp,
  MainStore,
  ModalImagesPost,
  ProfilePage,
  SeeHistory,
} from "../modules";
import {
  FriendsRequest,
  MenuApp,
  Navbar,
  PostsSaved,
  ShowPostAlone,
  WindownNotifications,
} from "../components";

export const SecondRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/chats" element={<ChatAppPage />} />
        <Route path="/friends" element={<FriendsRequest />} />
        <Route path="/menu" element={<MenuApp />} />
        <Route path="/notifications" element={<WindownNotifications />} />
        <Route path="/saved" element={<PostsSaved />} />
        <Route path="/store" element={<MainStore />} />

        <Route path="/:name/post/:post_id" element={<ShowPostAlone />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/histories/:history_id" element={<SeeHistory />} />
        <Route path="/photo/:post_id" element={<ModalImagesPost />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
