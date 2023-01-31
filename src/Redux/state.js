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
			{ property: 0, id: 1, text: 'Yo)' },
			{ property: 0, id: 3, text: 'I am fine' },
			{ property: 0, id: 4, text: 'And you?' },
			{ property: 1, id: 6, text: 'I stady' },
			{ property: 1, id: 5, text: 'I realy like React' },
			{ property: 0, id: 7, text: 'It is cool!' },
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

export default state