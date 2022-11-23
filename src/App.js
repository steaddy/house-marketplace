import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import React from "react";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Explore/>}/>
              <Route path='/offers' element={<Offers/>}/>
              <Route path='/profile' element={<SignIn/>}/>
              <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/sign-up' element={<SignUp/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
