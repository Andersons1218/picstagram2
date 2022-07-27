import Posts from "../Posts/Posts"
export default function Feed({filterUserId, user, post, setPost}) {
	return (
		<>
			<div className='feed'>
				<div className='feedcontainer'>
					<Posts filterUserId={filterUserId} user={user} post={post} setPost={setPost}/>
				</div>
			</div>
		</>
	)
}