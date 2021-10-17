import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Logo_Williams_F1.png' />
		</header>
	);
}

export default Header;