
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState,useEffect} from 'react';
import Header from './Header';
import Nav from './Nav'
import Footer from './Footer';
import Home from './Home'
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { format } from 'date-fns';




function App() {
  const [search,setSearch] = useState('');
  const [postTitle,setPostTitle] = useState('');
  const [postBody,setPostBody] = useState('');
  const [searchResults,setSearchResults] = useState('');
  const [posts,setPosts] = useState([{
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }
])
useEffect(() => {
  const filteredResults = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

  setSearchResults(filteredResults.reverse());
}, [posts, search])
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id+1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyyy pp'); 
    const newPost = {id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts,newPost];
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('');
  }

  return (
    <>
  <BrowserRouter>
    
    <Header title = 'React JS Blog'/>
    <Nav 
      search = {search}
      setSearch={setSearch}  
    />
      <Routes>
        <Route path ='/' element ={<Home posts={searchResults}/>}></Route>
        <Route path ='/post' element = {<NewPost handleSubmit={handleSubmit} postTitle = {postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />}></Route>
        <Route path ='/post/:id' element ={<PostPage posts={posts} setPosts={setPosts}/>}></Route>
        <Route path ='/about' element = {<About/>}></Route>
        <Route path = '*' element = {<Missing/>}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
