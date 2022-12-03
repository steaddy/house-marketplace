import React, { useState } from "react";
import {toast} from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const {email, password} = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const auth = getAuth();

            const userCredential = await signInWithEmailAndPassword(
                auth, email, password
            );

            if(userCredential.user) {
                navigate('/');
            }
        } catch (e) {
            toast.error('Bad User Credentials')
        }
    };

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Welcome Back
                    </p>
                </header>
                <main>
                    <form onSubmit={onSubmit}>
                        <input className="emailInput" type='email'
                        placeholder='Email' id='email' value={email}
                        onChange={onChange}/>
                        <div className="passwordInputDiv">
                            <input type={showPassword? 'text' : 'password'}
                            className='passwordInput' placeholder='Password'
                            id='password' value={password} onChange={onChange}/>
                            <img src={visibilityIcon}
                                 className="showPassword"
                                 alt='show password'
                            onClick={()=> setShowPassword(prevState => !prevState)}/>
                            <Link to='/forgot-password' className='forgotPasswordLink'>
                                Forgot Password
                            </Link>
                        </div>
                        <div className="signInBar">
                            <p className="signInText">
                                Sign In
                            </p>
                            <button className="signInButton">
                                <ArrowRightIcon fill='white' width='34px' height='43px' />
                            </button>
                        </div>
                    </form>
                    {/* TODO Google OAuth */}
                    <Link to='/sign-up' className='registerLink'>
                        Sign Up Instead
                    </Link>
                </main>
            </div>
        </>
    );
};

export default SignIn;