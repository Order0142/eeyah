import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/sass/index.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
