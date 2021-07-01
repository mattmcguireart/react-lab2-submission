import React, { useState } from "react";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";
import Post from "./models/Post";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Wes",
      thought: "Wes lives in ham town",
    },
    {
      title: "Luke",
      thought: "Luke likes to go to the gym",
    },
    {
      title: "Matt",
      thought: "Matt likes to play board games",
    },
  ]);

  return (
    <div className="SocialPosts">
      <button>New Thoughts</button>
      {posts.map((item) => (
        <PostInList post={item} />
      ))}

      <PostForm />
    </div>
  );
};

export default SocialPosts;
