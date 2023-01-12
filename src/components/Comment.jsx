import React, {useState} from "react";

const Comment = () => {
    const [comment, setComment] = useState("")
    

    const handleComment = (event) => {setComment(event.target.value)}
    
    return (
        <div classname='card'>
          
            <p className="comment">{comment}</p>
            <input className="comment-input" placeholder="Comment" type="text" onChange={handleComment}/>

        </div>
    )
}

export default Comment


