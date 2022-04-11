import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {

    const { user } = useFirebase()
    return (
        <div>
            <h2> The name is display using useFirebase</h2>
            <p>{user?.displayName ? user.displayName : "Please Login or register"}</p>
        </div>
    );
};

export default Products;