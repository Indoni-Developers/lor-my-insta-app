import React from 'react';
import ProfileImage from '../components/ProfileImage';

class ProfilePage extends React.Component{
    render(){
        return (
            <div>
                <h1>Reactagram</h1>
                <ProfileImage />
            </div>
        );
    }
}

export default ProfilePage;