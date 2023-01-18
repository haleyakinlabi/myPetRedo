import React from 'react'
import { SlLike } from "react-icons/sl";
import Like from './Like';

const Post = ({body, imageUrl, likesCount, id, user}) => {

    

  const renderUser = ({username, imageUrl, likesCount, species, breed}) => {
    return (

      <div className='posted-by-flex-container'>
        <img className='posted-by-img' src={imageUrl} alt="avatar" />
        <p className='posted-by-username'>{username}</p>
        <p className='post-species-breed'>{species}</p>
        <p className='post-species-breed'>{breed}</p>
      </div>
    )
  }

  return (
    <div className="post-example">
        {renderUser(user)}
        <p className='post_body'>{body}</p>
        <SlLike></SlLike>
        <Like postId={id}></Like>

    </div>
  )
}

export default Post

