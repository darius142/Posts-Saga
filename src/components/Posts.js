import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.lenght) {
    return <p className="text-center">No posts</p>
  }
  return posts.map(post => <Post post={post} id={post} />)
} 