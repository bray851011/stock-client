import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UserContext } from "../../contexts/user.context";
import axios from "axios";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import ActivationModal from "../modal/activationModal.component";

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
        <div class="w-96 py-4">  
            <h1 class="flex justify-center pb-4 text-3xl font-bold">登入</h1>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    label="信箱" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <FormInput
                    label="密碼" 
                    required 
                    type="password"
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <div className="text-sm">
                    <Link to="../forget-password" className="text-black hover:font-semibold font-medium forget-pwd">
                        忘記密碼?
                    </Link>
                </div>

                <Button buttonType="inverted" type="submit" class="text-white w-full bg-black rounded-md p-3 my-3 hover:outline hover:outline-offset-1 hover:outline-black hover:bg-white hover:text-black">登入</Button>
                <Button className="text-sm" onClick={() => props.onFormSwitch('register')}>
                    還沒有帳號嗎? 前往註冊
                </Button>
            </form>

            {showModal && (
                <ActivationModal close={() => setShowModal(false)} send={handleResend}/>
            )}
        </div>
    )
}


export default SignInForm;