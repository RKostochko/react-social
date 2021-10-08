import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.profile}>
			<div>
				<img src='https://s11.favim.com/orig/7/783/7830/78306/twitter-soft-aesthetic-Favim.com-7830691.jpg' />
			</div>
			<div>
				ava + description
			</div>
			<div>
				my posts
				<div>
					new post
				</div>
				<div className={s.posts}>
					<div className={s.post}>
						post 1
					</div>
					<div className={s.post}>
						post 2
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;