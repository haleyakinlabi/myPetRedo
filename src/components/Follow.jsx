import React, { useState } from 'react';
import axios from 'axios';


const Follow = ({ leaderId }) => {
    const [isFollowing, setIsFollowing] = useState(false);
    

    const handleFollow = async () => {


        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                'Content-Type': 'application/json',
            }
            const data = { leader_id: leaderId }

            
            const res = await axios.post('https://haley-capstone.fly.dev/followerships/', data , {headers});
            

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
                <button className="follow-btn"onClick={handleFollow}>+</button>
            )}
        </div>
    )
}

export default Follow;