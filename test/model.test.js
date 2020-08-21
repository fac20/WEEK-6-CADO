const path = require("path");
const build = require("..", "database", "build");
const db = require("..", "database", "connection");
const test = require("tape");
const { create } = require("domain");
const { getPostsData, add, createUser, getUser, getAllUsernames } = require("..", "handlers", "model");

/* test for getting all usernames
test("Can get all usernames", (t) => {
    build().then(() => {
      getAllUsernames().then((users) => {
        const firstUser = users[0];
        t.equal(firstUser.username, "Kitty");
        t.equal(firstUser.location, "Your Heart");
        t.end();
      })
      .catch((error) => {
        t.error(error);
        t.end();
      })
    });
});
*/

test("Can get all posts", (t) => {
  console.log("before build!");
    build().then(() => {
    console.log("after build!");
      getPostsData
        .then((posts) => {
          const firstPost = posts[0];
          t.equal(firstPost["post_title"], "Seeking a friend to help me test my sausages");
          t.end();
        })
        .catch((error) => {
          t.error(error);
          t.end();
        });
    });
  });

  // test("Can create a new user", (t) => {
  //   build().then(() => {
  //     const data = { username: "oli", age: 29, location: "London" };
  //     createUser(data)
  //       .then(getUsers)
  //       .then((users) => {
  //         const latestUser = users[users.length - 1];
  //         t.equal(latestUser.username, "oli");
  //         t.end();
  //       })
  //       .catch((error) => {
  //         t.error(error);
  //         t.end();
  //       });
  //   });
  // });
