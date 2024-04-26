import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeContainer, ContactContainer} from "./container";
import "./Style/Style.css"
import "./Style/Fonts.css"
import "./assets/images"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
