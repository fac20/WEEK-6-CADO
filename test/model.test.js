const path = require("path");
const build = require("..", "database", "build");
const test = require("tape");
const { getPostsData, add, createUser, getUser, getAllUsernames } = require("..", "handlers", "model");

//test for getting all usernames
test("Can get all usernames", (t) => {
    build().then(() => {
      getAllUsernames().then((users) => {
        const firstUser = users[0];
        t.equal(firstUser.username, "Kitty");
        t.equal(firstUser.location, "Your Heart");
        t.end();
      });
    });
  });
