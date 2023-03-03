import { Navigate, Route, Routes } from "react-router-dom";
import { FriendsRequest } from "../FriendsRequest/FriendsRequest";
import { MainApp } from "../MainApp/MainApp";
import { Navbar } from "../NavBar/Navbar";
import { ProfilePage } from "../ProfilePage";
import { MainStore } from "../StoreApp";

export const SecondRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/friends" element={<FriendsRequest />} />
        <Route path="/store" element={<MainStore />} />

        <Route path="/:username" element={<ProfilePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
