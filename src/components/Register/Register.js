import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { googleGoogle } = useFirebase()
    return (
        <div>
            <h2>Please Registration</h2>
            <form action="">
                <input type="text" placeholder='Name' />
                <br />
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Register" onClick={googleGoogle} />
            </form>
        </div>
    );
};

export default Register;