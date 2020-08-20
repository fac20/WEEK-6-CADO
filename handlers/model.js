const db = require("./../database/connection");

function getPostsData() {
  // move db query to models
  let dbStr =
    "SELECT * FROM users INNER JOIN posts ON users.id = posts.user_id ORDER BY posts.id DESC";
  return db.query(dbStr);
}

// modifyyyyyyyy
const add = async function (name, msgtitle, message) {
  try {
    let nameInsertion = await db.query(
      "INSERT INTO users(username) VALUES($1)",
      [name]
    ); //if duplicate values then unique constraint will throw error. Need to have an error block to handle this.
    let postInsertion = await db.query(
      "INSERT INTO posts(post_title, text_content, user_id) VALUES($1, $2, (SELECT MIN(id) FROM users WHERE username = $3))",
      [msgtitle, message, name]
    );

    return nameInsertion, postInsertion;
  } catch (e) {
    console.error(e);
  }
};
//need to include check if username already exists new checkuser function
const createUser = (userDetails) => {
  return db.query(
    "INSERT INTO users(username, password, location, image_link) VALUES($1, $2, $3, $4)",
    Object.values(userDetails)
  );
};

module.exports = { getPostsData, add, createUser };
