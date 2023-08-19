import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (<div>
    
      <Header blogName = {blogData.name}/>
      <About blogImage = {blogData.image}aboutText={blogData.about}/>
      <ArticleList blogPosts = {blogData.posts}/>
  </div>
  );
}

export default App;
