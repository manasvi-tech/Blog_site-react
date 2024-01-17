import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from './api/posts'

const PostPage = ({posts,setPosts}) => {
  const { id } = useParams(); /* gets the id from the localHost link */
  const post = posts.find(post => (post.id).toString() === id );
  const navigate = useNavigate();
  
  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !==id);
      setPosts(postsList);
      navigate('/');
    } catch (err){
      console.log(err.message);
    }
  
    
  }

  return (
    <main className='PostPage'>
      <article>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <NavLink to ={`/edit/${post.id}`}>
              <button className='editButton'>Edit Post</button>
            </NavLink>
            <button className='deleteButton' onClick = {() => handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        }
        {!post &&
          <>
            <h2>Post Not Found</h2>
            <p>Well that's disappointing</p>
            <p>
              <NavLink to ='/'>Visit Our Homepage</NavLink>
            </p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage