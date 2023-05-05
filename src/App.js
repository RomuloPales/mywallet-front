import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { GlobalStyle } from "./globalStyles";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}
