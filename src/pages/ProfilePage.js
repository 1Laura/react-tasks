import React, {useRef} from 'react';
import useUserStore from "../store/main";

const ProfilePage = () => {
    const {currentUser, updateAvatar} = useUserStore();
    const avatarUrlRef = useRef();


    function updateUserAvatar() {
        const newUserAvatarUrl = avatarUrlRef.current.value;
        console.log(newUserAvatarUrl);
        updateAvatar(newUserAvatarUrl);
    }

    return (
        <div className={"container"}>
            <img src={currentUser.avatar} alt=""/>
            <p>{currentUser.username}</p>
            <input type="text" placeholder="Enter avatar url" ref={avatarUrlRef}/>
            <button onClick={updateUserAvatar}>Update avatar</button>
        </div>
    );
};

export default ProfilePage;

// https://fastly.picsum.photos/id/958/200/300.jpg?hmac=oCwv3AFzS5VqZv3nvDJ3H5RzcDH2OiL2g-GGwWL5fsI