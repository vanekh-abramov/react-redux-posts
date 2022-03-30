import React, { useEffect } from "react";
import "./styles/app.css";
import { connect } from "react-redux";
import {
  getPosts as getPostAction,
  deletePost as deletePostAction,
} from "./reduxReducer/posts";
import Post from "./components/post";
import CreatePost from "./components/createPost";

function App({ posts, getPosts, deletePost }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="app">
      <CreatePost />
      {posts.length &&
        posts.map((post) => (
          <Post
            deletePost={deletePost}
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
    </div>
  );
}

export default connect(
  ({ posts }) => ({ posts: posts.posts }),

  {
    getPosts: getPostAction,
    deletePost: deletePostAction,
  }
)(App);
