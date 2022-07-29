import Feed from "../../components/Feed";

export default function HomePage({user, setUser}) {
    return (
        <>
        <div>
            <h1>Picstagram</h1>
            <hr />
            <Feed user={user} setUser={setUser}/>  
        </div>
        </>
    )
}