import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { GlobalStyle } from "./globalStyles";
import SigninPage from "./pages/SignInPage";
import SignupPage from "./pages/SignUpPage";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SigninPage/>}></Route>
          <Route path="/sign-up" element={<SignupPage/>}></Route>
          <Route path="/home" element={<h1>Home</h1>}></Route>
          <Route path="/newIn" element={<h1>entrada</h1>}></Route>
          <Route path="/newOut" element={<h1>saida</h1>}></Route>

        </Routes> 
      </BrowserRouter>
    </>
  );
}
