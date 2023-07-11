import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { GlobalStyle } from "./globalStyles";
import SigninPage from "./pages/SignInPage";
import SignupPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import EntryValue from "./pages/EntryValue.js";
import OutsValue from "./pages/OutsValues.js";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SigninPage />}></Route>
          <Route path="/sign-up" element={<SignupPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/newEntry" element={<EntryValue />}></Route>
          <Route path="/newOut" element={<OutsValue />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
