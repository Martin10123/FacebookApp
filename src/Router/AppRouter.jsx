import { MainApp } from "../MainApp/MainApp";
import { Navbar } from "../NavBar/Navbar";
import { MainStore, SelfArticle } from "../storeApp";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <SelfArticle />
    </>
  );
};
