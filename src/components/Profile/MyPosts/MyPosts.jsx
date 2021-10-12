import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
	{ id: 1, message: "Hi, how are you?", likesCount: 12 },
	{ id: 2, message: "It's my first post", likesCount: 11 },	
]

const MyPosts = (props) => {
	return (
		<div className={s.myPosts}>
			<h3>
				My posts
			</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button className={s.addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
				<Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
			</div>
		</div>
	);
}

export default MyPosts;