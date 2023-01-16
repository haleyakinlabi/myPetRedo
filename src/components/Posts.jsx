import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import PostsFilter from './PostsFilter'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://haley-capstone.fly.dev/posts', {
        headers: {
            'Authorization': localStorage.getItem('access-token')
        }
      })
      
      setPosts(res.data.posts)
    }
    fetchData()
  }, [])

  const renderPost = post => {
    return (
      <Post key={post.id}
        body={post.body}
        imageUrl={post.imageUrl}
        likesCount={post.likesCount}
        species={post.species}
        breed={post.breed}
        user={post.user} />
    )
  }

  return (
    <section className='posts-container'>
      
      {posts.map(post => renderPost(post))}
    </section>
  )
}

export default Posts