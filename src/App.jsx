import React from "react";
import { Home } from "./pages/home";
import { Thanks } from "./pages/thanks";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
