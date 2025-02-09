const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());
app.use(cors());


const posts ={};

//  example
// posts === {
//     'j12345':{
//         'id': 'j12345',
//         'title': 'post title',
//         comments:{
//             'id': 'commentId',
//             'content': 'comment content'
//         }
//     }
// }


app.get('/posts',(req,res)=>{

    res.send(posts);

})


app.post('/events',(req,res)=>{
    

    const {type, data,status} = req.body;

    if(type === 'PostCreated'){
        const {id, title} = data;
        posts[id] = {id, title, comments: []};
    }

    if(type === 'CommentCreated'){
        const {id, content, postId, status} = data;
        const post = posts[postId];
        post.comments.push({id, content, status});
    }
    if(type ==='CommentUpdated'){
        const {id, content, postId, status} = data;
        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });
        comment.content = content;
        comment.status = status;
    }

    console.log(posts);
    res.send({});
})

app.listen(4002,()=>{
    console.log('Listening on 4002');
})