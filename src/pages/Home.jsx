import React, {useState} from 'react'
import Post from '../components/Post'


const Home = () => {
  
  
  
  
    return (
    <div>
        <div>
            <p className='filter-posts'>Filter Posts</p>
            
            <button className='sort-by-friends'>friends</button>
            
            <select className='sort-by-species'>
                <option>Species</option>
                <option>Cats</option>
                <option>Dogs</option>
                <option>Rodents</option>
                <option>Birds</option>
                <option>Exotic</option>
            </select>

        </div>

        <Post></Post>

    </div>
  )
}

export default Home
