import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
const auth = getAuth(app)

const Orders = () => {

    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is Order</h1>
            <p>Thank You {user?.displayName} for Login.</p>
        </div>
    );
};

export default Orders;