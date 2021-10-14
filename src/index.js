import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{ id: 1, message: "Hi, how are you?", likesCount: 12 },
	{ id: 2, message: "It's my first post", likesCount: 11 },	
]

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
