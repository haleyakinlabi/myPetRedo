import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import Users from '../components/Users'


const Profile = () => {
  const navigate = useNavigate()
  const [postBody, setPostBody] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
    //setIsLoading(true)

    const data = { body: postBody }
    const headers = {
      'Authorization': localStorage.getItem('access-token'),
      'Content-Type': 'application/json'
    }

    axios
      .post('https://haley-capstone.fly.dev/posts', data, {
        headers
      })
      .then(response => {
        navigate('/')
      })
      .catch(error => {
        // todo: handler errors
        console.log(error)
      })
  }

  return (
    <div>
      <Header />

      <div className='post-search'>
      
        <section className='posts-container'>
          <form onSubmit={handleSubmit} className='create-post-form'>
            <p className='create-post-text'>Create Post:</p>

            <div className='create-post-container'>
              <textarea
                className='create-post-input'
                cols='30'
                rows='10'
                placeholder='Type something...'
                onChange={e => setPostBody(e.target.value)}
              ></textarea>

            </div>

            <button className='post'>Post</button>
          </form>
        </section>

      <Users></Users>
        
        
      </div>
    </div>
  )
}

export default Profile




