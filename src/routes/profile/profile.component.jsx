import { useParams } from "react-router-dom";


import './profile.styles.scss'

const Profile = () => {
    // 從 URL 取得 user_id
    const user_id = useParams();
    
    console.log(user_id);
    
    return (
        <div className="profile-container">
            Profile
        </div>
    );
}

export default Profile;