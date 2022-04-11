import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = getAuth(app)
const About = () => {

    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>The name is display using react-firebase-hooks. CHILL</h1>
            <p>{user?.displayName ? user.displayName : "Please Login or register"}</p>
        </div>
    );
};

export default About;