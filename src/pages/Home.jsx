import React, {useState} from 'react'
import Posts from '../components/Posts'
import Dropdown from '../components/Dropdown'
import UsersDropdown from '../components/UsersDropdown'
import Header from '../components/Header'



//need useEffect to fetch posts from the api 
//render posts


const Home = () => {
  
    
  
  
    return (
    <div>

        <Header></Header>
        <div className='feed-and-following'>
        <Dropdown></Dropdown>
        <UsersDropdown></UsersDropdown>
        </div>

    </div>
  )
}

export default Home
