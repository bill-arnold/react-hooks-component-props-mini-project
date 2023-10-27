import React from "react";

import blogData from "../data/blog";


console.log(blogData);

const About= 
  <>  
  <img src={blogData.image} alt="Logo" />
  <h1>{blogData.name}</h1>
  <p>{blogData.about}</p>
  </>

const BlogPost = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <p>{post.preview}</p>
      <p>{post.minutes} min read</p>
    </div>
  );
};

// const Articlelist = 
// <div key={blogData.posts.id}>
// <h2>{blogData.posts.title}</h2>
//   <p>{blogData.posts.preview}</p>
//   <p>{blogData.posts.minutes}</p>

// </div>
function App() {
  return (
  <div>
  <h1>{About}</h1>
  <main>{BlogPost}</main>
  </div>
  )

  
}

export default App;
