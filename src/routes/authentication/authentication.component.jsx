import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { UserContext } from "../../contexts/user.context";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Auth = () => {
    const { currentUser } = useContext(UserContext);
    const [currentForm, setCurrentForm] = useState('login')
    const navigate = useNavigate();
    if(currentUser) navigate(`/profile/${currentUser.user_id}`);

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }


    return (
        <div>
            {
                currentForm === 'login' ?  
                    <SignInForm onFormSwitch={toggleForm}/> : 
                    <SignUpForm onFormSwitch={toggleForm}/>
            }
        </div>
    );
}

export default Auth;