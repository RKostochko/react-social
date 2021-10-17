let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, how are you?", likesCount: 12 },
			{ id: 2, message: "It's my first post", likesCount: 11 },	
		],
	},
	dialogsPage:{
		dialogs: [
			{ id: 1, name: 'Roma' }, 
			{ id: 2,	name: 'Dima' }, 
			{ id: 3,	name: 'Ivan' }, 
			{ id: 4,	name: 'Alya' }, 
			{ id: 5,	name: 'Pavel' }, 
			{ id: 6,	name: 'Sasha' }
		],
		messages: [
			{ id: 1, message: "Hi"},
			{ id: 2, message: "How are you?" },
			{ id: 3, message: "I'm fine!" },
			{ id: 4, message: "Yo" },
			{ id: 5, message: "Yo" }		
		]	
	},
	sidebar: {}
}

export default state;