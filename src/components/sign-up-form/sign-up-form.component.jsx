import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import axios from "axios";

import './sign-up-form.styles.scss'

const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, confirmPassword } = formFields;
        
    // console.log(formFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/create_user', 
            {
                email: formFields.email,
                pw: formFields.password,
                activated: false,
                name: formFields.name,    
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response)
            if (response.status === 201) {
                window.location.reload();
                alert('Account created! Activate via the email link!');
                console.log("Successed");
            } else {
                // Handle login error
                // alert(response.data.message);
                console.log('Register failed');
            }

        } catch (error) {
            console.error('There was an error logging in:', error);
        }
    };

    return (
        <div className="sign-up">
            <form className="sign-up-form" onSubmit={ handleSubmit } >
                <div className="header">
                    <h2>Sign Up</h2>
                </div>

                <div className="h-line"></div>

                <FormInput
                    label="Name" 
                    type="name" 
                    required 
                    onChange={handleChange} 
                    name="name" 
                    value={name}
                />

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
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />

                <FormInput
                    label="Confirm Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />

                <div className="h-line"></div>

                <div className="b-container">
                    <Button buttonType="inverted" type="submit">
                        Sign Up
                    </Button>
                    <Button buttonType="inverted" onClick={() => props.onFormSwitch('login')}>
                        Log In
                    </Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignUpForm;