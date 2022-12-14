import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Explore/>}/>
                    <Route path='/offers' element={<Offers/>}/>
                    <Route path='/profile' element={<PrivateRoute/>}>
                        <Route path='/profile' element={<Profile/>}/>
                    </Route>
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>
                </Routes>
                <Navbar/>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
