import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import axios from "axios";

const defaultFormFields = {
    displayLastName: '',
    displayFirstName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayFirstName, displayLastName, email, phoneNumber, password, confirmPassword} = formFields;
        
    // console.log(formFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/users/register', {
                firstName: displayFirstName,
                lastName: displayLastName,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                confirmPassword: confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        if (response.data.success) {
            window.location.reload();
            alert('註冊成功!請至信箱開通帳號，在嘗試登入!');
            console.log("Successed");
        } else {
            // Handle login error
            alert(response.data.message);
            console.log('Register failed:', response.data.message);
        }
        } catch (error) {
            console.error('There was an error logging in:', error);
        }
    };

    return (
        <div class="w-96 py-4">
            <h1 class="flex justify-center pb-4 text-3xl font-bold">加入 P+ League Fantasy!</h1>  
            <span class="flex justify-center">請用信箱註冊</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    label="姓" 
                    type="text"
                    required 
                    onChange={handleChange} 
                    name="displayLastName" 
                    value={displayLastName}
                />

                <FormInput
                    label="名" 
                    type="text"
                    required 
                    onChange={handleChange} 
                    name="displayFirstName" 
                    value={displayFirstName}
                />

                <FormInput
                    label="信箱" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <FormInput
                    label="電話" 
                    type="text" 
                    id="phone-input" 
                    required 
                    onChange={handleChange} 
                    name="phoneNumber" 
                    value={phoneNumber}
                />

                <FormInput
                    label="密碼" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />

                <FormInput
                    label="確認密碼" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />

                <Button buttonType="inverted" type="submit" class="text-white w-full bg-black rounded-md p-3 my-3 hover:outline hover:outline-offset-1 hover:outline-black hover:bg-white hover:text-black">註冊</Button>
                <Button className="text-sm" onClick={() => props.onFormSwitch('login')}>
                    已有帳號? 前往登入
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm;