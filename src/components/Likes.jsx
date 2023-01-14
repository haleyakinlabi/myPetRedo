import React, {useState} from 'react'
import { SlLike } from "react-icons/sl";

const Likes = () => {

    const [likes, setLikes] = useState(0)

    const incrementLikes = () => {

        setLikes(likes + 1)
    }



  return (
    <div className='likes-box'>
      
    <button className="thumbs-up" onClick={incrementLikes}><SlLike></SlLike></button>
    <span>{likes}</span>

    </div>
  )
}

export default Likes
