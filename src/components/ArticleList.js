import React from "react";
import Article from "./Article"; // Check the path to make sure it's correct

function ArticleList({ blogPosts }) {
  return (
    <main>
      {blogPosts.map((post, index) => (
        <Article key={index} post={post} />
      ))}
    </main>
  );
}

export default ArticleList;
