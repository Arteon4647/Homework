document.querySelectorAll("p").forEach((el) => (el.style.color = "green"));

[...document.querySelectorAll("h2")].forEach((h2) => {
  h2.style.fontSize = "100px";
});

document.querySelectorAll("div").forEach((div) => {
  div.remove();
});
