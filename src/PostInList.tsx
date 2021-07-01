import Post from "./models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
}

const PostInList = ({ post }: Props) => {
  return (
    <div className="PostInList">
      <p>{post.title}</p>
      <p>{post.thought}</p>
    </div>
  );
};

export default PostInList;
