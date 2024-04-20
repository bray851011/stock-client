import { createContext, useEffect, useState} from "react";
import axios from "axios";

// As the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        checkSession();
    }, [])
    
    const checkSession = async () => {
        const response = await axios.get('http://localhost:3000/users/checkSession', {
            withCredentials: true,
        });
        console.log(response);
        setCurrentUser(response.data.user_info);
    }

    const value = { currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}