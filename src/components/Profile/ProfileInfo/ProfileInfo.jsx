import s from "./ProfileInfo.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import Cover from "./Cover/Cover";

const ProfileInfo = (props) => {
	return (
		<div>
				<Cover />
				<Avatar />
				<Description />
		</div>
	)
}

export default ProfileInfo;