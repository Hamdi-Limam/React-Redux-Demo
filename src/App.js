import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
//import Posts from "./components/Posts";
import store from "./store";
import { Provider } from "react-redux";
import PostsClass from "./components/PostsClass";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostForm />
        <PostsClass /> {/* Calling Dispatch with Class Component */}
        {/* <Posts /> */} {/* Calling Dispatch with functional Component */}
      </Provider>
    </div>
  );
}

export default App;
