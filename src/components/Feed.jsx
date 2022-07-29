import Posts from "../components/Posts"
export default function Feed({ user, post, setPost}) {
	return (
		<>
			<div className='feed'>
				<div className='feedcontainer'>
					<Posts user={user} post={post} setPost={setPost}/>
				</div>
			</div>
		</>
	)
}