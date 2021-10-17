import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.post}>
			<img src="https://sun9-81.userapi.com/impg/t7PbKxR0rG008nmYsDHoIpfa-4lfR0nVWh7Ldg/cLOptQASZ_g.jpg?size=111x111&quality=96&sign=7bea93ba48fef73cc4583f03fd7accf9&type=album" />
			<span> {props.message} </span>
			<div>likes: {props.likesCount}</div>
		</div>
	);
}

export default Post;