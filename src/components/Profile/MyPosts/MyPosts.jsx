import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	debugger;
	let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )
	
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