import React, { createContext, useReducer, useEffect } from "react";
import { postReducer } from "../reducers/postReducer";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [posts, dispatch] = useReducer(postReducer, [], () => {
    console.log("From useReducer call in PostContext");
    let localData = localStorage.getItem("posts");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    console.log("From useEffect of PostContext");
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
