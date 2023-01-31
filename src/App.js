import Header from "./components/Header";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import "./styles/sass/index.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Notification />
      <Outlet />
    </>
  );
}

export default App;
