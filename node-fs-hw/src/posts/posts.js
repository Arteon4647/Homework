//H/w
const { createFile } = require("../files/files");

function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => posts)
      .catch((err) => console.log(err));
  }
  function generatePostsLayout() {
    getPosts().then((posts) => {
      let content = "";
  
      posts.forEach(({ id, title, body }) => {
  
        content += `
          <div class="posts-card">
            <h3>${title}</h3>
            <p>${body}</p>
            <a href="./posts/post-${id}.html">Link to post</a>
          </div>
        `;
  
        createFile(
          `./src/files/storage/posts/post-${id}.html`,
          `
              <head>
                  <title>Post-${id}</title>
              </head>
              <body>
                  <h1>${title}</h1>
                  <p>${body}</p>
  
                  <script src="../../../../post/post.js"></script>
              </body>
           `
        );
      });
  
      createFile("./src/files/storage/posts.html", content);
    });
  }
  
  module.exports = {
    getPosts,
    generatePostsLayout,
  };