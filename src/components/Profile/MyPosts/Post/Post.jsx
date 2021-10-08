import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.post}>
			<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
			<span> {props.message} </span>
		</div>
	);
}

export default Post;