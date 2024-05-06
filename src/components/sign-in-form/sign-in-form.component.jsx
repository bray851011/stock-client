import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UserContext } from "../../contexts/user.context";
import axios from "axios";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import ActivationModal from "../modal/activationModal.component";

import "./sign-in-form.styles.scss"

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = (props) => {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [showModal, setShowModal] = useState(false);

    // 偵測輸入欄位
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    // 登入
    const handleSubmit = async (event) => {
    };

    // 重寄 帳號開通 email 連結
    const handleResend = async (event) => {
    };

    return (
        <div className="login">  
            <form className="form-container" onSubmit={ handleSubmit }>

                <div className="header">
                    <h2>Sign In</h2>
                </div>

                <div className='h-line'></div>
                <FormInput
                    label="Email" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <FormInput
                    label="Password" 
                    required 
                    type="password"
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />

                <div className='h-line'></div>

                <div className="b-container">
                    <button>
                        Login
                    </button>
                    <button onClick={() => props.onFormSwitch('register')}>
                        Register
                    </button>
                </div>
                
                <div className='h-line'></div>

                <div className="f-container">
                    <Link className="link" to="../forget-password">
                        Forget Password?
                    </Link>
                </div>
            </form>

            {showModal && (
                <ActivationModal close={() => setShowModal(false)} send={handleResend}/>
            )}
            
        </div>
    )
}


export default SignInForm;