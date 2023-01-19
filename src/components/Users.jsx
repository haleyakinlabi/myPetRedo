import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(' https://haley-capstone.fly.dev/users', {
        headers: {
            'Authorization': localStorage.getItem('access-token')
        }
      })
      
      setUsers(res.data.users)
    }
    fetchData()
  }, [])

  const renderUser = user => {

    return (
      <User key={user.id}
        id={user.id}
        username={user.username}
        imageUrl={user.imageUrl}
        species={user.species}
        breed={user.breed}/>
    )
  }


  return (
    <section className='posts-container'>
      
      {users.map(user => renderUser(user))}
    </section>
  )
}

export default Users