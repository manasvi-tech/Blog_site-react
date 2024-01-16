
import './App.css';
import {BrowserRouter, Router,Route, Routes,NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react';
import Header from './Header';
import Nav from './Nav'
import Footer from './Footer';
import Home from './Home'
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';


function App() {
  const [search,setSearch] = useState('');
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


  
  const [searchResults,setSearchResults] = useState('');
  

  return (
    <>
  <BrowserRouter>
    <Header title = 'React JS Blog'/>
    <Nav 
      search = {search}
      setSearch={setSearch}  
    />
      <Routes>
        <Route path ='/' element ={<Home posts={posts}/>}></Route>
        <Route path ='/post' element = {<NewPost/>}></Route>
        <Route path ='/post/:id' element ={<PostPage posts={posts} setPosts={setPosts}/>}></Route>
        <Route path ='/about' element = {<About/>}></Route>
        <Route path = '*' element = {<Missing/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
