const information = {
  usersQ: 12,
  admins: 2,
  posts: [{ title: "Title1" }, { title: "Title2" }],
};

// Використати LS для зберігання даних:  posts
// Використати SS для зберігання даних: usersQ, admins
// Написати функцію, що створює новий пост, оновлюючи дані у LS відповідно (новий пост додається до масиву)

localStorage.setItem("posts", JSON.stringify(information.posts));

sessionStorage.setItem("admins", information.admins);
sessionStorage.setItem("usersQ", information.usersQ);

function newPost(post) {
  const postsLS = JSON.parse(localStorage.getItem("posts"));
  postsLS.push(post);
  localStorage.setItem("posts", JSON.stringify(postsLS));
}
newPost({ title: "Title3" });
