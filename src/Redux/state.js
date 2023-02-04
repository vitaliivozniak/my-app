let state = {
	profile: {
		postData: [
			{ id: 1, text: 'Hey, why nobody love me?', like: '100' },
			{ id: 2, text: "It's our new program! Hey!", like: '150' },
		],
	},
	messages: {
		navbarData: [
			{ id: "/alexander", name: 'Alexander' },
			{ id: "/john", name: 'John' },
			{ id: "/igor", name: 'Igor' },
			{ id: "/karyna", name: 'Karyna' },
			{ id: "/adam", name: 'Adam' },
			{ id: "/victoria", name: 'Victoria' },
			{ id: "/alex", name: 'Alex' },
		],
		dialogData: [
			{ property: 1, id: 1, text: 'Hi' },
			{ property: 1, id: 2, text: 'How are you?' },
			{ property: 0, id: 3, text: 'Yo)' },
			{ property: 0, id: 4, text: 'I am fine' },
			{ property: 0, id: 5, text: 'And you?' },
			{ property: 1, id: 6, text: 'I stady' },
			{ property: 1, id: 7, text: 'I realy like React' },
			{ property: 0, id: 8, text: 'It is cool!' },
		],
	},
	friends: {
		friendsData: [
			{ status: 'online', id: "/alexander", name: 'Alexander' },
			{ status: 'online', id: "/john", name: 'John' },
			{ status: 'offline', id: "/igor", name: 'Igor' },
			{ status: 'online', id: "/karyna", name: 'Karyna' },
			{ status: 'offline', id: "/adam", name: 'Adam' },
			{ status: 'offline', id: "/victoria", name: 'Victoria' },
			{ status: 'online', id: "/alex", name: 'Alex' },
		],
	},
}


export let addPost = (post) => {
	let newPost = {
		id: 5,
		text: post,
		like: 50,
	};
	state.profile.postData.push(newPost);
}

export let addMessage = (message) => {
	debugger;
	let newMessage = {
		property: 0,
		id: 9,
		text: message,
	};
	state.messages.dialogData.push(newMessage)
}
export default state