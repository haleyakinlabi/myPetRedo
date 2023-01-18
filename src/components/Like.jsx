import React, { useState } from 'react';
import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem("access-token")

const Like = ({ postId }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async () => {
        debugger
        try {
            const response = await axios.post(`https://haley-capstone.fly.dev/posts/${postId}/likes`, {}, {
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
        <button className="like-btn"onClick={handleLike}>
            {isLiked ? 'Unlike' : 'Like'}
        </button>
    );
}

export default Like;





