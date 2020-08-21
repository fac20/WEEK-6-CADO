const db = require('./../database/connection');

function getPostsData() {
	// move db query to models
	let dbStr =
		'SELECT users.username, users.location, users.image_link, posts.post_title, posts.text_content FROM users INNER JOIN posts ON users.id = posts.user_id ORDER BY posts.id DESC';
	return db.query(dbStr);
}

// modifyyyyyyyy
const add = async function (name, msgtitle, message) {
	try {
		//if duplicate values then unique constraint will throw error. Need to have an error block to handle this.
		let postInsertion = await db.query(
			'INSERT INTO posts(post_title, text_content, user_id) VALUES($1, $2, (SELECT MIN(id) FROM users WHERE username = $3))',
			[msgtitle, message, name]
		);

		return postInsertion;
	} catch (e) {
		console.error(e);
	}
};
//need to include check if username already exists new checkuser function
const createUser = userDetails => {
	return db.query(
		'INSERT INTO users(username, password, location, image_link) VALUES($1, $2, $3, $4)',
		Object.values(userDetails)
	);
};

const getUser = username => {
	//checks if username exists return boolean
	return db.query('SELECT * FROM users WHERE username = $1', [username]);
};

//SECURITY CONCERN
const getAllUsernames = () => {
	return db.query('SELECT username FROM users');
};

module.exports = { getPostsData, add, createUser, getUser, getAllUsernames };
