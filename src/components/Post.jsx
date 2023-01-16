import React from 'react'

const Post = ({body, imageUrl, likesCount, user}) => {

  const renderUser = ({username, imageUrl, likesCount, species, breed}) => {
    return (
      <div>
        <p>Posted by</p>
        <img src={imageUrl} alt="avatar" />
        <p>{username}</p>
        <p>{species}</p>
        <p>{breed}</p>
      </div>
    )
  }

  return (
    <div className="post-example">
      <p>Body: {body}</p>
      <p>Likes: {likesCount}</p>
      {renderUser(user)}
    </div>
  )
}

export default Post