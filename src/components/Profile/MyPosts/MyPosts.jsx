import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
	{ id: 1, message: "Hi, how are you?", likesCount: 12 },
	{ id: 2, message: "It's my first post", likesCount: 11 },	
]

let postsElement = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

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
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts;