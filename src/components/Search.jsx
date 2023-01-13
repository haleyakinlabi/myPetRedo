import React from 'react';
import { GrAdd } from "react-icons/gr";


const Search = () => {

    const friends = ["Amy", "Sarah", "James", "Charlie"]

    const friendsFiltered = friends.filter(function(value){
        return value === "Amy"
    })





  return(
    <div className='search-box'>
        
        <p className='find-friends-text'>Find Friends:</p>
        
        <div search-container>
            <input className='search-input' type="text" placeholder='Type Username'></input>
            <button className='search-btn'>Search</button>
        </div>

        <div className='search-results'>

            <div className='search-result-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

            <div className='search-result-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

            <div className='search-result-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

        </div>

        <div className='all-users-box'>

            <p className='all-users-text'>All Users</p>

            <div className='users-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

            <div className='users-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

            <div className='users-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

            <div className='users-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

            <div className='users-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

            <div className='users-box'>
                <img className='search-img' src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg'></img>
                <p className='search-name'>Kitten</p>
                <GrAdd className='plus'></GrAdd>
            </div>

        </div>


    </div>
  )
  
}

export default Search
