export default function Post({ user, post, setPost }) {
    return (
        <>
        <div>
            <h1>Post</h1>
            <hr />
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
        </>
    )
}