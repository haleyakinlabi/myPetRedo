import React from 'react'


const User = ({username, imageUrl, species, breed}) => {

  return (
    <div className='friend-container'>
        
        <img className='friend-img' src={imageUrl} alt="avatar" />
        <p className='friend-username'>{username}</p>
        <p className='post-species-breed'>{species}</p>
        <p className='post-species-breed'>{breed}</p>
        
    </div>
  )
}

export default User