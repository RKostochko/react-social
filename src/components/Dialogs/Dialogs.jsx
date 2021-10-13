import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [
		{ id: 1, name: 'Roma' }, 
		{ id: 2,	name: 'Dima' }, 
		{ id: 3,	name: 'Ivan' }, 
		{ id: 4,	name: 'Alya' }, 
		{ id: 5,	name: 'Pavel' }, 
		{ id: 6,	name: 'Sasha' }
	]
	
	let messages = [
		{ id: 1, message: "Hi"},
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "I'm fine!" },
		{ id: 4, message: "Yo" },
		{ id: 5, message: "Yo" }		
	]	

	let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} activeClassName={s.active}/> ); 
	let messagesELements = messages.map( m => <Message message={m.message}/>)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesELements}
			</div>
		</div>
	)
}

export default Dialogs;