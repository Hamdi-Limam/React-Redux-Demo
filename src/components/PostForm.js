import React from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/postAction";

export default function PostForm() {
  const [postData, setPostData] = React.useState({ title: "", body: "" });
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  return (
    <div className="form__container">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          value={postData.title}
          name="title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <br />

        <label>Body:</label>
        <textarea
          name="body"
          value={postData.body}
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />

        <br />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
