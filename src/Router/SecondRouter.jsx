import { Navigate, Route, Routes } from "react-router-dom";
import { FriendsRequest } from "../Friends";
import { MainApp } from "../MainApp/MainApp";
import { MenuApp } from "../MenuApp";
import { Navbar } from "../NavBar/Navbar";
import { ProfilePage } from "../ProfilePage";
import { MainStore } from "../StoreApp";
import { WindownNotifications } from "../WindownNotifications/WindownNotifications";

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
