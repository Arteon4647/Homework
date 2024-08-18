const { createFile, deleteFile, readFile } = require("./src/files/files");
const { getUsers, generateUsersLayout } = require("./src/users/users");
//H/W
const { getPosts, generatePostsLayout } = require("./src/posts/posts");

console.log("Node.js is starting");

createFile();
// deleteFile();
readFile();
generateUsersLayout();
//H/W
generatePostsLayout();