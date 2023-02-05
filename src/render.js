import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addMessage, addPost, updateNewNessageText, updateNewPostText, } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewNessageText={updateNewNessageText} />
		</React.StrictMode>
	);
}
