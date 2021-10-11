import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={`${s.dialog} ${s.active}`}>
					Roma
				</div>
				<div className={s.dialog}>
					Dima
				</div>
				<div className={s.dialog}>
					Ivan
				</div>
				<div className={s.dialog}>
					Maxim
				</div>
				<div className={s.dialog}>
					Alya
				</div>
				<div className={s.dialog}>
					Sasha
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How are you?</div>
				<div className={s.message}>I'm Fine!</div>
			</div>
		</div>
	)
}

export default Dialogs;