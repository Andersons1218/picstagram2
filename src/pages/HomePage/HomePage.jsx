import Feed from "../../components/Feed";


export default function HomePage({user, setUser}) {
    return (
        <>
        <div>
            <img url='https://imgur.com/mFShW83' alt='' />
            <hr />
            <Feed user={user} setUser={setUser}/>  
        </div>
        </>
    )
}