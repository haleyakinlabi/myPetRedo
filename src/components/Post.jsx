import React from 'react'
import Likes from './Likes'


const Post = () => {
  return (
    <div>
      

    <section className='posts-container'>
       
       <div className='filter-container'>
            <p className='filter-text'>Filter By</p>
            <button className='filter-friends'>Friends</button>
            <select className='filter-species'>
                <option>Species</option>
                <option>cat</option>
                <option>dog</option>
                <option>rodent</option>
                <option>bird</option>
                <option>other</option>
            </select>
        </div>

        <div className="post-example">
            <div>
                <img className="profile-img-ex" src='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg'></img>
                <p className="example-post">Hello my name is Puppy! I am only three months old and love chewing on shoes!</p>
                <Likes></Likes>
            </div>
        </div>
        

        <div className="post-example">
            <div>
                <img className="profile-img-ex" src='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg'></img>
                <p className="example-post">Hello my name is Puppy! I am only three months old and love chewing on shoes!</p>
                <Likes></Likes>
            </div>
        </div>
        

        <div className="post-example">
            <div>
                <img className="profile-img-ex" src='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg'></img>
                <p className="example-post">Hello my name is Puppy! I am only three months old and love chewing on shoes!</p>
                <Likes></Likes>
            </div>
        </div>
        

        <div className="post-example">
            <div>
                <img className="profile-img-ex" src='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg'></img>
                <p className="example-post">Hello my name is Puppy! I am only three months old and love chewing on shoes!</p>
                <Likes></Likes>
            </div>
        </div>
       

        <div className="post-example">
            <div>
                <img className="profile-img-ex" src='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg'></img>
                <p className="example-post">Hello my name is Puppy! I am only three months old and love chewing on shoes!</p>
                <Likes></Likes>
            </div>
        </div>
        

        
        

        

        

    </section>


    </div>
  )
}

export default Post
