import { Navigate, Route, Routes } from "react-router-dom";
import { MainApp, MainStore, ProfilePage } from "../modules";
import {
  FriendsRequest,
  MenuApp,
  Navbar,
  WindownNotifications,
} from "../components";

export const SecondRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/friends" element={<FriendsRequest />} />
        <Route path="/menu" element={<MenuApp />} />
        <Route path="/notifications" element={<WindownNotifications />} />
        <Route path="/store" element={<MainStore />} />

        <Route path="/:username" element={<ProfilePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
