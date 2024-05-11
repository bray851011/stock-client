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
        event.preventDefault();
        try {
            // HTTP Post Request
            const response = await axios.post('http://localhost:3000/users/login', {
                email: email,
                password: password
            }, {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
            });
        if (response.data.success) {
            if (response.data.user_info.verified){
                // Update current user
                setCurrentUser(response.data.user_info);
                console.log(response.data.user_info);

                // Navigate to profile page if login successfully
                navigate(`/profile/${response.data.user_info.user_id}`);
                
                console.log("Successed");
            } else {
                setShowModal(true);
            }
            
        } else {
            // Handle login error
            alert(`${response.data.message}`);
            // console.log('Login failed:', response.data.message);
        }
        } catch (error) {
            console.error('There was an error logging in:', error);
        }
    };

        // 重寄 帳號開通 email 連結
        const handleResend = async (event) => {
            event.preventDefault();
    
            const response = await axios.post('http://localhost:3000/users/resend', {
                email: formFields.email,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert(response.data.message);
            console.log(response)
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