import React from 'react'
import Follow from './Follow'
import Unfollow from './Unfollow'



const User = ({id, username, imageUrl, species, breed }) => {

    
  return (
    <div className='friend-container'>
        
        <img className='friend-img' src={imageUrl} alt="avatar" />
        <p className='friend-username'>{username}</p>
        <p className='post-species-breed'>{species}</p>
        <p className='post-species-breed'>{breed}</p>
        <Follow leaderId={id}></Follow>
        <Unfollow leader_id={id}></Unfollow>
        
        
    </div>
  )
}

export default User