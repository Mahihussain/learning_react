import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";

const Home = () => {
  const { posts, dispatch } = useContext(PostContext);
  //console.log(posts);
  return posts
    ? posts.map((post, index) => {
        return (
          <div key={post.Id}>
            <h4>
              {index + 1}. User ID: {post.UserId}
            </h4>
            <h5>Title: {post.Title}</h5>
            <p>Body: {post.Body}</p>
            <button onClick={()=>{
                dispatch({type: "REMOVE_POST", payload: {
                    Id: post.Id
                } })
            }}> Remove </button>
            <hr />
          </div>
        );
      })
    : "";
};
export default Home;
