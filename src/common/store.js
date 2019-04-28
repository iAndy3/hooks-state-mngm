export default {
	users: [],
	user: {
		username: 'Bobby',
		age: 63
	},
	posts: [{
		id: 1,
		imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/016/366/1409630808061.png',
		comments: [{
			id: 1,
			name: 'Bill',
			text: 'John, haha. Where did you find this one?!'
		}, {
			id: 2,
			name: 'John',
			text: 'Oh somewhere online haha. It just cracked me up! Thanks for joining us tonight Bill.'
		}, {
			id: 3,
			name: 'Bill',
			text: 'I really, really, really like this image.'
		}, {
			id: 4,
			name: 'John',
			text: 'Me too! Save it, it\'s all yours my friend :)'
		}],
		likes: 0
	}],
	groups: [{
		id: 1,
		name: 'Cooking',
		joined: false,
	}, {
		id: 2,
		name: 'Washing',
		joined: true,
	}, {
		id: 3,
		name: 'Dads jokes',
		joined: true
	}]
};