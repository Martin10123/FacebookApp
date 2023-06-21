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
  FriendsRequest,
  InformationPrivacity,
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
        <Route path="/infoPrivacity" element={<InformationPrivacity />} />
        <Route path="/menu" element={<MenuApp />} />
        <Route path="/notifications" element={<WindownNotifications />} />
        <Route path="/saved" element={<PostsSaved />} />
        <Route path="/store" element={<MainStore />} />
        <Route path="/stories/create" element={<SelectTypeHistory />} />

        <Route path="/:name/post/:post_id" element={<ShowPostAlone />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/stories/:uidUser" element={<SeeHistory />} />
        <Route path="/photo/:post_id" element={<ModalImagesPost />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
