import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
export default () => {
    const [posts, setPosts] = useState({});


    const fetchPosts = async () => {
        

        await axios.get('http://localhost:4002/posts').then((res)=>{
            setPosts(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });


    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
         {renderedPosts}
        </div>
    );
}