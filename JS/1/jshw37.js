//EditUserView

class EditUserView extends View {
  constructor(controllers, parent) {
    super(controllers, parent);
  }

  onUpdate(id, data) {
    const { userController } = this.controllers;
    userController.update(id, data);
  }

  clearInputData() {
    [...document.querySelectorAll("input")].forEach(
      (input) => (input.value = "")
    );
  }

  render() {
    const idInput = document.createElement("input");
    idInput.placeholder = "User ID";

    const nameInput = document.createElement("input");
    nameInput.placeholder = "New Name";

    const ageInput = document.createElement("input");
    ageInput.placeholder = "New Age";

    const button = document.createElement("button");
    button.textContent = "Update";

    button.onclick = () => {
      const id = idInput.value;
      const data = { name: nameInput.value, age: ageInput.value };
      this.onUpdate(id, data);
      this.clearInputData();
    };

    [idInput, nameInput, ageInput, button].forEach((element) =>
      this.parent.appendChild(element)
    );
  }
}

new EditUserView({ userController }, document.body).render();

//CreatePostView
class CreatePostView extends View {
  constructor(controllers, parent) {
    super(controllers, parent);
  }

  onSubmit(data) {
    const { postController } = this.controllers;
    postController.create(data);
  }

  clearInputData() {
    [...document.querySelectorAll("input")].forEach(
      (input) => (input.value = "")
    );
  }

  render() {
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Post Title";

    const contentInput = document.createElement("input");
    contentInput.placeholder = "Post Content";

    const authorIdInput = document.createElement("input");
    authorIdInput.placeholder = "Author ID";

    const button = document.createElement("button");
    button.textContent = "Create Post";

    button.onclick = () => {
      const data = {
        title: titleInput.value,
        content: contentInput.value,
        authorId: authorIdInput.value,
      };
      this.onSubmit(data);
      this.clearInputData();
    };

    [titleInput, contentInput, authorIdInput, button].forEach((element) =>
      this.parent.appendChild(element)
    );
  }
}

new CreatePostView({ postController }, document.body).render();
