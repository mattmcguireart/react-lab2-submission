import "./PostForm.css";

const PostForm = () => {
  return (
    <div className="PostForm">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="thought">Thought</label>
        <textarea
          name="thought"
          id="thought"
          cols={30}
          rows={10}
          onChange={(e) => setThought(e.target.value)}
          value={thought}
        ></textarea>
        <button>Add</button>
      </form>
    </div>
  );
};

export default PostForm;
