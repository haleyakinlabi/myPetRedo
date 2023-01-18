import React, { useState } from 'react';
import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem("access-token")

const Like = ({ post_id }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async () => {
        try {
            const response = await axios.post(`https://haley-capstone.fly.dev/posts/${post_id}/likes`, {}, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
            });
            setIsLiked(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button onClick={handleLike}>
            {isLiked ? 'Unlike' : 'Like'}
        </button>
    );
}

export default Like;




