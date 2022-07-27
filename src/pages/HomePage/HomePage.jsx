import Post from "../../components/Post";

export default function HomePage({user, setUser}) {
    return (
        <>
        <div>
            <h1>Home Page</h1>
            <hr />
            <Post user={user} setUser={setUser}/>
            <p>Welcome to the home page</p>
        </div>
        </>
    )
}