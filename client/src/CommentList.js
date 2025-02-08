import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
function CommentList({postId}) {

    const [comments, setComments] = useState([]);


    const fetchData = async()=>{
        await axios.get(`http://localhost:4001/posts/${postId}/comments`).then((res)=>{
            console.log(res.data);
            setComments(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    const renderedComments = comments.map(comment => {
        return (
            <li  key={comment.id}>
                
                    {comment.content}
               
            </li>
        );
    });


  return (
    <ul>
{renderedComments}

    </ul>
  )
}

export default CommentList