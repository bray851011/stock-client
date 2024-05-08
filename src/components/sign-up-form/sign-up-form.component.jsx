import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import sendActivationEmail from "../../services/emailService";

import bcrypt from "bcryptjs";
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

    const [errorPasswordLength, setErrorPasswordLength] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
        
    useEffect(() => {
        // console.log(formFields);
        // Check PW length
        if (formFields.password.length < 6 && formFields.password.length > 0) {
            setErrorPasswordLength('Password must be 6+ characters');
        } else {
            setErrorPasswordLength('');
        }

        // Confrim PW
        if (formFields.password !== formFields.confirmPassword && formFields.confirmPassword !== '') {
            setErrorPassword('Passwords do not match');
        } else {
            setErrorPassword('');
        }

    }, [formFields]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value)
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const hashedPassword = await bcrypt.hash(formFields.password, 10);
            const response = await axios.post('http://localhost:8000/create_user', 
            {
                email: formFields.email,
                pw: hashedPassword,
                activated: false,
                name: formFields.name,    
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // console.log(response.status)

            if (response.status === 201 || response.status === 200) {
                sendActivationEmail(formFields.name,formFields.email, 'token')
                console.log("Successed");
                alert('Account created! Activate via the email link!');
                // window.location.reload();
            } else {
                // Handle login error
                // alert(response.data.message);
                console.log('Register failed');
            }

        } catch (error) {
            if (error.response.status === 400 ){
                alert('Email Already Used');
            }
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

                {errorPasswordLength && <div className='error-message'>{errorPasswordLength}</div>}
                {errorPassword && <div className='error-message'>{errorPassword}</div>}

                <div className="h-line"></div>

                <div className="b-container">
                    <button 
                        type="submit" 
                        disabled={name === '' || email === '' || password === '' || confirmPassword === '' || errorPassword !== '' || errorPasswordLength !== ''}>
                        Create
                    </button>
                    <button 
                        onClick={() => props.onFormSwitch('login')}>
                        Back
                    </button>
                </div>
                
            </form>
        </div>
    )
}

export default SignUpForm;