import { EventsBirthday } from "../EventsBirthday/EventsBirthday";
import { MainApp } from "../MainApp/MainApp";
import { Navbar } from "../NavBar/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <EventsBirthday />
    </>
  );
};
