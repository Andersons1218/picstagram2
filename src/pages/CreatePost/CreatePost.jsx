import NewPost from "../../components/NewPost";


export default function CreatePost({user }) {
    return (
        <>
        <div>
            <h1>Create Post</h1>
            <hr />
            <NewPost user={user}/>
        </div>
        </>
    )
 }