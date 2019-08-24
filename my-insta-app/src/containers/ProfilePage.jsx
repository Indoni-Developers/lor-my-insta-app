import React from 'react';
import ProfileImage from '../components/ProfileImage';
import PostGrid from '../components/PostGrid';

class ProfilePage extends React.Component{
    render(){
        return (
            <div>
                <h1>Reactagram</h1>
                <ProfileImage />
                <PostGrid />
            </div>
        );
    }
}

export default ProfilePage;