import React from 'react'
import Follow from './Follow'


const User = ({id, username, imageUrl, species, breed }) => {

    
  return (
    <div className='friend-container'>
        
        <img className='friend-img' src={imageUrl} alt="avatar" />
        <p className='friend-username'>{username}</p>
        <p className='post-species-breed'>{species}</p>
        <p className='post-species-breed'>{breed}</p>
        <Follow leaderId={id}></Follow>
        
    </div>
  )
}

export default User