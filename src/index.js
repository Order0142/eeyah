import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Help from "./pages/Help";
import Landings from "./pages/Landings";
import Login from "./pages/Login";
import Pages from "./pages/Pages";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Ade = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="help" element={<Help />} />
          <Route path="landings" element={<Landings />} />
          <Route path="login" element={<Login />} />
          <Route path="pages" element={<Pages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Ade;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Ade />
  </React.StrictMode>
);
