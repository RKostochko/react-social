import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Avatar from './Avatar/Avatar';
import Description from './Description/Description';

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<div>
				<img src='https://s11.favim.com/orig/7/783/7830/78306/twitter-soft-aesthetic-Favim.com-7830691.jpg' />
			</div>
			<div>
				<Avatar />
				<Description />
			</div>
			<MyPosts />
		</div>
	);
}

export default Profile;