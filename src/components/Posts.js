import React, { useEffect } from "react";
import { fetchpost } from "../actions/postAction";
import { useSelector, useDispatch } from "react-redux";

export default function Posts() {
  const posts = useSelector((state) => state.posts.items);
  const post = useSelector((state) => state.posts.item);
  const dispatch = useDispatch();

  //Fetch all Posts
  const useFetching = () =>
    useEffect(() => {
      dispatch(fetchpost());
    }, []);
  useFetching();

  useEffect(() => {
    console.log("before", posts);
    if (post.id !== undefined) {
      posts.unshift(post);
    }
    console.log("after", posts);
  }, [posts, post]);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <span>{post.body}</span>
        </div>
      ))}
    </>
  );
}
