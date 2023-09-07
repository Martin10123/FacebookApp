import { Route, Routes } from "react-router-dom";

import {FriendsRequest} from "../components/Friends/FriendsRequests/FriendsRequest";
import {InformationPrivacity} from "../components/InformationPrivacity/InformationPrivacity";
import {PostsSaved} from "../components/Posts/PostsSaved/page/PostsSaved";
import {MainStore} from "../modules/StoreApp/MainStore/pages/MainStore";

export const SideBarMenus = () => {
  return (
    <>
      <Routes>
        <Route path="/friends" element={<FriendsRequest />} />
        <Route path="/infoPrivacity" element={<InformationPrivacity />} />
        <Route path="/saved" element={<PostsSaved />} />
        <Route path="/store" element={<MainStore />} />
      </Routes>
    </>
  );
};

export default SideBarMenus;
