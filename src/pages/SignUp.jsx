import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {db} from '../firebase.config';
import {setDoc, doc, serverTimestamp} from 'firebase/firestore';
import {toast} from "react-toastify";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const {name, email, password} = formData;

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

            const userCredential = await createUserWithEmailAndPassword(
                auth, email, password
            );

            const user = userCredential.user;

            updateProfile(auth.currentUser, {
                displayName: name});

            const formDataCopy = {...formData};
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/');
        } catch (e) {
            toast.error('Something went wrong with the registration')
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
                        <input className="nameInput" type='text'
                               placeholder='Name' id='name' value={name}
                               onChange={onChange}/>
                        <input className="emailInput" type='email'
                               placeholder='Email' id='email' value={email}
                               onChange={onChange}/>
                        <div className="passwordInputDiv">
                            <input type={showPassword ? 'text' : 'password'}
                                   className='passwordInput' placeholder='Password'
                                   id='password' value={password} onChange={onChange}/>
                            <img src={visibilityIcon}
                                 className="showPassword"
                                 alt='show password'
                                 onClick={() => setShowPassword(prevState => !prevState)}/>
                            <Link to='/forgot-password' className='forgotPasswordLink'>
                                Forgot Password
                            </Link>
                        </div>
                        <div className="signUpBar">
                            <p className="signUpText">
                                Sign Up
                            </p>
                            <button className="signUpButton">
                                <ArrowRightIcon
                                    fill='white'
                                    width='34px'
                                    height='43px'/>
                            </button>
                        </div>
                    </form>
                    {/* TODO Google OAuth */}
                    <Link to='/sign-in' className='registerLink'>
                        Sign In Instead
                    </Link>
                </main>
            </div>
        </>
    );
};

export default SignUp;