import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
    const handleSignOut = async () => {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
            }
            await axios.post('https://haley-capstone.fly.dev/users/sign_out.json', null, {headers});
            localStorage.removeItem('access_token');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button onClick={handleSignOut}>Sign Out</button>
    )
}

export default Logout;
