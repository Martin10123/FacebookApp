import { EditComment } from "../Comments/EditComment/EditComment";
import { Navbar } from "../NavBar/Navbar";
import { EditStatePosts } from "../Posts";
import { SureDelete } from "../SureDelete/SureDelete";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <EditStatePosts />
    </>
  );
};
