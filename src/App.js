import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { GlobalStyle } from "./globalStyles";
import SigninPage from "./pages/SignInPage";
import SignupPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import EntryValue from "./pages/EntryValue.js";
import OutsValue from "./pages/OutsValues.js";
import { userContext } from "./context/userContext";
export default function App() {
  const [user, setUser]= useState({})

  return (
    <>
      <BrowserRouter>
      <userContext.Provider value={{user, setUser}}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SigninPage />}></Route>
          <Route path="/sign-up" element={<SignupPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/newEntry" element={<EntryValue />}></Route>
          <Route path="/newOutPut" element={<OutsValue />}></Route>
        </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}
