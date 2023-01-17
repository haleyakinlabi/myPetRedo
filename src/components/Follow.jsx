import React, { useState } from 'react';
import axios from 'axios';

const Follow = ({ leaderId }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = async () => {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
            }
            const data = { leader_id: leaderId }
            await axios.post('http://localhost:3000/followerships', data, { headers });
            setIsFollowing(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {isFollowing ? (
                <p>Following</p>
            ) : (
                <button onClick={handleFollow}>Follow</button>
            )}
        </div>
    )
}

export default Follow;