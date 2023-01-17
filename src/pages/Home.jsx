import React, {useState} from 'react'
import Posts from '../components/Posts'
import Dropdown from '../components/Dropdown'
import UsersDropdown from '../components/UsersDropdown'



//need useEffect to fetch posts from the api 
//render posts


const Home = () => {
  
    
  
  
    return (
    <div>

        <div className='feed-and-following'>
        <Dropdown></Dropdown>
        <UsersDropdown></UsersDropdown>
        </div>

    </div>
  )
}

export default Home
