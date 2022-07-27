

export default function Post({ user, setUser, post }) {
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    </>
  );
